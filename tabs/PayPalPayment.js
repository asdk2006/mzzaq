import React, { Component } from 'react'
import {
    View,
    WebView,
    ActivityIndicator
} from 'react-native'
import axios from 'axios'

export default class Paypal extends Component {
    static navigationOptions = {
        title:'التسوق',
        tabBarLabel: 'التسوق',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../images/icon-shopping.png')}
                style={{width: 22, height: 22, tintColor: 'white'}}>
            </Image>
        )
    }
 
    state = {
        accessToken: null,
        approvalUrl: null,
        paymentId: null
    }

    componentDidMount() {
        let currency = '100 USD'
        currency.replace(" USD", "")

        const dataDetail = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "transactions": [{
                "amount": {
                    "total": currency,
                    "currency": "THB",
                    "details": {
                        "subtotal": currency,
                        "tax": "0",
                        "shipping": "0",
                        "handling_fee": "0",
                        "shipping_discount": "0",
                        "insurance": "0"
                    }
                }

            }],
            "redirect_urls": {
                "return_url": "https://www.mzaaq.com",
                "cancel_url": "https://www.mzaaq.com"
            }
        }

        axios.post('api here', { grant_type: 'client_credentials' },
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `` // Your authorization value
                }
            }
        )
            .then(response => {
                this.setState({
                    accessToken: response.data.access_token
                })

                axios.post('api here', dataDetail,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${this.state.accessToken}`
                        }
                    }
                )
                    .then(response => {

                        const { id, links } = response.data
                        const approvalUrl = links.find(data => data.rel == "approval_url")

                        this.setState({
                            paymentId: id,
                            approvalUrl: approvalUrl.href
                        })
                    }).catch(err => {
                        console.log({ ...err })
                    })
            }).catch(err => {
                console.log({ ...err })
            })

    }

    _onNavigationStateChange = (webViewState) => {

        if (webViewState.url.includes('https://www.mzaaq.com/')) {

            this.setState({
                approvalUrl: null
            })

            const { PayerID, paymentId } = webViewState.url

            axios.post(`api here/${paymentId}/execute`, { payer_id: PayerID },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.state.accessToken}`
                    }
                }
            )
                .then(response => {
                    console.log(response)

                }).catch(err => {
                    console.log({ ...err })
                })

        }
    }

    render() {

        const { approvalUrl } = this.state
        return (
            <View style={{ flex: 1 }}>
                {
                    approvalUrl ? <WebView
                        style={{ height: 400, width: 300 }}
                        source={{ uri: approvalUrl }}
                        onNavigationStateChange={this._onNavigationStateChange}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        startInLoadingState={false}
                        style={{ marginTop: 20 }}
                    /> : <ActivityIndicator />
                }
            </View>
        )
    }
}