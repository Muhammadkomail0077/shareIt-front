import React from 'react';
import {Platform, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from '../FacebookButton/style';
import {useDispatch, useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {appleAuth} from '@invertase/react-native-apple-authentication';
import { UserData } from '../../../Store/slices';

function AppleButton({navigation, loading, setLoading}) {
  const reducerData = useSelector(state => state);
  const dispatch = useDispatch();

  async function onAppleButtonPress() {
    setLoading(true)
    try {
    // Start the sign-in request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    // Ensure Apple returned a user identityToken
    if (!appleAuthRequestResponse.identityToken) {
      throw new Error('Apple Sign-In failed - no identify token returned');
    }

    // Create a Firebase credential from the response
    const {identityToken, nonce} = appleAuthRequestResponse;
    const appleCredential = auth.AppleAuthProvider.credential(
      identityToken,
      nonce,
    );

    // Sign the user in with the credential
    return auth().signInWithCredential(appleCredential);
  } catch (error) {
    setLoading(false)
      console.log('Apple login Error:',error)
  }
  }

  return (
    <>
      {Platform.OS === 'ios' ? (
        <Pressable
          // onPress={() =>
          //   onAppleButtonPress().then(res => {
          //     console.log('Apple sign-in complete. Response:', res?.user._user);
          //     dispatch(UserData(res))
          //     setLoading(false)
          //     navigation.navigate('profile');
          //   })
          // }
          >
          <Icon
            style={styles.icons}
            name="apple1"
            size={35}
            color={reducerData?.isDark?.isdark ? '#fff' : '#555555'}
          />
        </Pressable>
      ) : (
        <></>
      )}
    </>
  );
}

export default AppleButton;
