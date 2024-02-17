import React, {useEffect}from 'react';
import './Chatbot.css'

export const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)
 
    script.onload = () => {
      window.botpressWebChat.init({
        composerPlaceholder: "Chat with bot",
        botId: '4e45b4d8-bd6f-4167-8145-1bb5a69811d1',

        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: '4e45b4d8-bd6f-4167-8145-1bb5a69811d1',
        webhookId: "b61a3ee7-0965-4c88-8117-d8d89fd6dbe6",

        lazySocket: true,
        themeName: "prism",
        frontendVersion: "v1",
        useSessionStorage: true,
        enableConversationDeletion: true,
        theme: "prism",
        themeColor: "#2563eb",

        stylesheet: 'https://webchat-styler-css.botpress.app/prod/cad7e9c7-ddc8-4816-85c6-c62f32ff7496/v38646/style.css',

      })
    }
  }, [])
 
  return <div id="webchat" />

}