// import {View, Text} from 'react-native';
// import React, {useEffect} from 'react';
// import OpenAI from 'openai';
// // const OPENAI_API_KEY =
// //   //  'proj_SUrwFwI7yKnBOHcpub8trCeL';
// //   'sk-Vv1umCqCkxXKiaqGGF0Wt8hAUJl8AXus7nb0glXcShT3BlbkFJFYcYoS9lGr89fXsASR_IAy40omSQrbXVkgmyMawpAA';
// ('AIzaSyCkOmu8sadtZyDthpJC98Zd8uew2uv1uYE');
// export default function ChatBot() {
//   useEffect(() => {
//     getChat();
//   }, []);

//   const getChat = async () => {
//     try {
//       const response = await fetch(
//         `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCkOmu8sadtZyDthpJC98Zd8uew2uv1uYE`,
//         {
//           method: 'POST',
//           headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             contents: [
//               {
//                 parts: [
//                   {
//                     text: 'Thời tiết hà nội hôm nay',
//                   },
//                 ],
//               },
//             ],
//           }),
//         },
//       );
//       const json = await response.json();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <View>
//       <Text>ChatBot</Text>
//     </View>
//   );
// }
import tw from 'lib/tailwind';
import React, {useState, useCallback, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {
  GiftedChat,
  IMessage,
  Send,
  SendProps,
  SystemMessage,
} from 'react-native-gifted-chat';
import {MyIcon} from 'src/share/components';

export default function ChatBot() {
  const [messages, setMessages] = useState<any>([]);

  useEffect(() => {
    handleSendMessages('Xin chào bạn.');
  }, []);

  const handleSendMessages = async (text: string) => {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCkOmu8sadtZyDthpJC98Zd8uew2uv1uYE`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: text,
                  },
                ],
              },
            ],
          }),
        },
      );
      const json = await response.json();
      if (json.candidates) {
        setMessages([
          ...messages,
          {
            _id: messages.length + 1,
            text: json.candidates[0].content.parts[0].text,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              avatar:
                'https://i.pinimg.com/564x/60/db/2e/60db2e8f2e9b23f58ad8594aec3f1ff8.jpg',
            },
          },
        ]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onSend = useCallback((messages = []) => {
    handleSendMessages(messages[0].text);
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderSend = useCallback((props: SendProps<IMessage>) => {
    return (
      <Send
        {...props}
        containerStyle={{justifyContent: 'center', paddingHorizontal: 10}}>
        <MyIcon
          iconFontType="MaterialIcons"
          size={30}
          color={'tomato'}
          name={'send'}
        />
      </Send>
    );
  }, []);
  const renderSystemMessage = useCallback(props => {
    return (
      <SystemMessage
        {...props}
        containerStyle={{
          marginBottom: 15,
        }}
        textStyle={{
          fontSize: 14,
        }}
      />
    );
  }, []);
  return (
    <SafeAreaView style={tw.style('flex-1 bg-white')}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderSend={renderSend}
        renderSystemMessage={renderSystemMessage}
        keyboardShouldPersistTaps="never"
        timeTextStyle={{
          left: {color: 'red'},
          right: {color: 'yellow'},
        }}
        quickReplyStyle={{borderRadius: 2}}
        quickReplyTextStyle={{
          fontWeight: '200',
        }}
      />
    </SafeAreaView>
  );
}
