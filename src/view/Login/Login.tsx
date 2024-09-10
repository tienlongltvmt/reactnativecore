import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import tw from 'lib/tailwind';
import Svg, {Path} from 'react-native-svg';
import {MyIcon, MyText} from 'src/share/components';
import {ScrollView} from 'react-native';
import MyNavigator from 'src/router/MyNavigator';
import auth from '@react-native-firebase/auth';
import Utilities from 'src/utils/Utilities';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  const handleLogin = () => {
    if (!email) {
      Utilities.toast('Vui lòng nhập email!', 'warning');
    } else if (!password) {
      Utilities.toast('Vui lòng nhập password!', 'warning');
    } else {
      if (isRegister) {
        auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            console.log('User account created & signed in!');
            MyNavigator.navigate('MainStack');
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              Utilities.toast(
                'That email address is already in use!',
                'warning',
              );
            }

            if (error.code === 'auth/invalid-email') {
              Utilities.toast('That email address is invalid!', 'warning');
            }

            console.log(error.message);
            // Utilities.toast(error, 'danger');
          });
      } else {
        auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            console.log('User account created & signed in!');
            MyNavigator.navigate('MainStack');
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              Utilities.toast(
                'That email address is already in use!',
                'warning',
              );
            }

            if (error.code === 'auth/invalid-email') {
              Utilities.toast('That email address is invalid!', 'warning');
            }

            console.log(error.message);
            // Utilities.toast(error, 'danger');
          });
      }
    }
  };
  // return null;
  return (
    <View style={tw.style('bg-green flex-1')}>
      <ScrollView
        style={tw.style('')}
        contentContainerStyle={tw.style(
          'justify-center self-center items-center flex-1 w-full',
        )}>
        <Svg
          width={98}
          height={98}
          fill="#fff"
          stroke="#fff"
          viewBox="0 0 245.5 245.5">
          <Path d="M204.188 181.292a2 2 0 0 0-2 2c0 11.824-32.772 24.484-81.556 24.484s-81.552-12.66-81.552-24.484a2 2 0 0 0-4 0c0 17.832 43.5 28.484 85.552 28.484s85.556-10.656 85.556-28.484a2 2 0 0 0-2-2z" />
          <Path d="M244.756 126.84c-.896-.496-14.752-7.94-33.296-11.048 6.972-12.66 9.7-24.012 9.896-24.864l-1.288-2.336c-.844-.296-12.364-4.2-27.244-4.956 1.152-17.632-2.532-31.644-2.792-32.596l-2.46-1.4c-1.1.304-18.704 5.304-35.828 17.452-10.244-19.376-26.476-32.576-27.472-33.368h-2.492c-1.012.804-17.72 14.396-27.928 34.252-17.508-12.804-35.956-18.024-37.084-18.332l-2.46 1.4c-.264.964-4.064 15.364-2.752 33.352-16.592.376-29.884 5.148-30.772 5.48l-1.232 2.416c.232.82 3.46 11.932 11.008 24.108-16.772 3.396-28.972 9.98-29.808 10.444L0 129.62c.828 1.388 20.668 34.08 54.24 43.152 2.088.564 4.176.988 6.26 1.352 1.72 10.96 31.676 17.488 60.748 17.488 28.644 0 58.156-6.332 60.668-17.004 3.1-.408 6.22-.996 9.344-1.84 33.572-9.072 53.412-41.764 54.24-43.152l-.744-2.776zm-52.292-39.116c11.344.564 20.768 2.98 24.52 4.092-1.08 3.828-4.14 13.296-9.88 23.348-7.052-.868-14.636-1.02-22.388.084 4.548-9.156 6.8-18.676 7.748-27.524zm-5.816-33.612c1.764 8.108 7.084 39.132-8.156 64.22-15.32 25.22-46.828 36.832-55.028 39.496-1.764-8.108-7.084-39.132 8.156-64.216 15.32-25.224 46.828-36.836 55.028-39.5zm-65.056 33.596c.516-.048 1.02-.124 1.552-.124.496 0 .972.06 1.452.1l-3.2 14.596a71.773 71.773 0 0 0-1.988-4.596l2.184-9.976zm-3.552 7.208a63.126 63.126 0 0 0-1.9-3.384c-.384-.636-.832-1.212-1.232-1.828a16.978 16.978 0 0 1 4.648-1.7l-1.516 6.912zm8.44-6.98c1.208.232 2.372.56 3.46 1.02-.576.86-1.192 1.68-1.736 2.576-1.716 2.824-3.112 5.712-4.368 8.62l2.66-12.12c.004-.036-.02-.064-.016-.096zm-3.452-50.032c4.048 3.504 17.016 15.484 25.444 31.608-6.332 4.872-12.416 10.768-17.432 17.816a19.35 19.35 0 0 0-7.896-1.668c-3.444 0-6.6.936-9.308 2.452-4.792-6.924-10.612-12.764-16.732-17.628 8.404-16.612 21.796-29.008 25.924-32.58zM57.696 54.108c8.2 2.664 39.688 14.248 55.024 39.5 3.412 5.62 5.728 11.532 7.344 17.428-5.196 19.704-2.408 38.568-.816 46.244-10.096-3.476-38.932-15.124-53.404-38.952-15.216-25.052-9.908-56.104-8.148-64.22zM23.984 93.02c4.172-1.316 15.128-4.28 27.98-4.54.988 8.572 3.2 17.736 7.548 26.568-8.592-1.072-16.98-.66-24.604.552-6.176-9.604-9.652-18.792-10.924-22.58zm31.308 75.884c-27.588-7.452-46.016-32.564-50.684-39.532 6.964-3.384 31.82-14.14 57.288-9.94.188.324.336.656.532.98 9.704 15.972 25.132 26.56 37.848 33.116-20.892 8.5-43.576 7.936-60.028-1.708a1.412 1.412 0 0 0-1.94.504 1.42 1.42 0 0 0 .504 1.94c9.18 5.38 20.188 8.076 31.756 8.076 10.86 0 22.208-2.404 33.004-7.152 5.744 2.76 10.692 4.644 13.988 5.772-9.204 4.284-36.136 15.008-62.268 7.944zm65.964 20.432c-33.04 0-55.736-7.428-58.276-14.828 3.712.52 7.392.78 10.992.78 25.612 0 47.196-11.564 48.788-12.436 1.588.872 23.172 12.436 48.788 12.436 2.608 0 5.268-.16 7.944-.424-3.152 7.284-25.732 14.472-58.236 14.472zm68.968-20.432c-26.656 7.208-54.124-4.096-62.768-8.184 11.384-3.98 39.624-15.896 54.456-40.312.144-.236.252-.48.392-.72 25.936-4.82 51.528 6.236 58.604 9.68-4.66 6.968-23.06 32.072-50.684 39.536z" />
          <Path d="M17.256 130.656a1.418 1.418 0 0 0-1.972-.352c-.64.448-.8 1.332-.352 1.972a71.106 71.106 0 0 0 5.228 6.624c.28.316.668.476 1.06.476a1.417 1.417 0 0 0 1.06-2.36 67.225 67.225 0 0 1-5.024-6.36zM35.956 149.076a78.767 78.767 0 0 1-10.272-8.484 1.416 1.416 0 1 0-1.984 2.024 81.692 81.692 0 0 0 10.636 8.788 1.422 1.422 0 0 0 1.976-.356 1.414 1.414 0 0 0-.356-1.972zM191.444 180.732a1.135 1.135 0 1 0-2.272 0c0 8.86-27.292 18.348-67.92 18.348s-67.92-9.488-67.92-18.348a1.135 1.135 0 1 0-2.272 0c0 11.56 30.832 20.616 70.192 20.616s70.192-9.056 70.192-20.616z" />
        </Svg>
        <MyText style={tw.style('text-white font-bold text-xl')}>
          Spa Management
        </MyText>
        <View style={tw.style('w-full px-4 items-center mt-14')}>
          <View style={tw.style('flex-row items-center')}>
            <MyIcon
              iconFontType="Feather"
              name="phone"
              color={'#F1C376'}
              size={22}
            />
            <TextInput
              style={tw.style(
                'w-3/4 p-3 text-sm border-l border-l-zinc-400 ml-3 text-orange-200',
              )}
              placeholder="Nhập tài khoản"
              placeholderTextColor={'#ECE3CE'}
              value={email}
              keyboardType="number-pad"
              onChangeText={text => {
                setEmail(text);
              }}
            />
          </View>
          <View style={tw.style('h-px bg-zinc-400 w-11/12')} />
        </View>
        <View style={tw.style('w-full px-4 items-center mt-6')}>
          <View style={tw.style('flex-row items-center')}>
            <MyIcon
              iconFontType="Fontisto"
              name="locked"
              color={'#F1C376'}
              size={22}
            />
            <TextInput
              style={tw.style(
                'w-3/4 p-3 text-sm border-l border-l-zinc-400 ml-3 text-orange-200',
              )}
              placeholder="Nhập mật khẩu"
              placeholderTextColor={'#ECE3CE'}
              secureTextEntry
              value={password}
              onChangeText={text => {
                setPassword(text);
              }}
            />
          </View>
          <View style={tw.style('h-px bg-zinc-400 w-11/12')} />
        </View>
        <MyText style={tw.style('text-white font-bold mt-4')}>
          Quên mật khẩu ?
        </MyText>
        <TouchableOpacity
          onPress={handleLogin}
          activeOpacity={0.8}
          style={tw.style(
            'bg-white w-4/5 items-center p-3 rounded-md m-4 mt-12',
          )}>
          <Text style={tw.style('font-bold')}>
            {isRegister ? 'Đăng ký' : 'Đăng nhập'}
          </Text>
        </TouchableOpacity>
        <View style={tw.style('flex-row items-center mt-8')}>
          <View style={tw.style('bg-slate-400 h-px w-1/6 ')} />
          <Text style={tw.style('font-bold mx-3 text-white')}>
            Hoặc đăng nhập bằng
          </Text>
          <View style={tw.style('bg-slate-400 h-px w-1/6')} />
        </View>
        <View style={tw.style('flex-row items-center mt-4')}>
          <TouchableOpacity activeOpacity={0.8}>
            <MyIcon
              iconFontType="MaterialIcons"
              name="facebook"
              size={24}
              color={'#F1C376'}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={tw.style('mx-4')}>
            <MyIcon
              iconFontType="MaterialIcons"
              name="tiktok"
              size={24}
              color={'#F1C376'}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <MyIcon
              iconFontType="MaterialCommunityIcons"
              name="instagram"
              size={24}
              color={'#F1C376'}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          setIsRegister(!isRegister);
        }}>
        <MyText
          style={tw.style('font-medium mx-3 text-white text-center mb-14')}>
          {!isRegister ? 'Bạn chưa có tài khoản?' : 'Tôi đã có tài khoản.'}{' '}
          <MyText style={tw.style('underline text-orange-200 ')}>
            {!isRegister ? 'Đăng ký' : 'Đăng nhập'}
          </MyText>
        </MyText>
      </TouchableOpacity>
    </View>
  );
}
