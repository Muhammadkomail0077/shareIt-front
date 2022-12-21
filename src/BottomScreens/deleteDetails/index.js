import React, {useState} from 'react';
import {Dimensions, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Checkbox, Divider, RadioButton} from 'react-native-paper';
import COLORS from '../../Assets/Style/Color';
import ButtonComp from '../../Components/ReusableComponent/Button';
import Heading from '../../Components/ReusableComponent/Heading';
import Input from '../../Components/ReusableComponent/input';
import InteractParagraph from '../../Components/ReusableComponent/Paragraph';
import SafeArea from '../../Components/ReusableComponent/Safearea';

function DeleteDetails({navigation}) {
  const [check, setCheck] = useState(false);
  const [checked, setChecked] = React.useState('');
  const width = Dimensions.get('window').width;
  const InputWidth = width / 1.7;

  return (
    <SafeArea>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            flex: 1,
            margin: '4%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
            }}>
            <ButtonComp
              mode={'outlined'}
              justify={'center'}
              align={'center'}
              btnHeight={65}
              icon={'chevron-back'}
              radius={15}
              Borderwidth={1}
              press={check ? () => setCheck(false) : () => navigation.goBack()}
            />
            {/* <ButtonComp
              mode={'outlined'}
              justify={'center'}
              align={'center'}
              btnHeight={65}
              icon={'chevron-back'}
              radius={15}
              Borderwidth={1}
              press={() => navigation.goBack()}
            /> */}
            <Heading
              Stylefont={'normal'}
              Fontweight={'700'}
              Fontsize={28}
              txtAlign={'center'}
              ml={'3%'}
              mt={'2%'}
              p={10}
              Heading={'Delete Account'}
            />
          </View>
          <View
            style={{
              //   backgroundColor: 'red',
              flexGrow: 1,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                marginTop: 40,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: COLORS.border_color,
              }}>
              <View style={{alignSelf: 'center'}}>
                <InteractParagraph
                  mt={10}
                  fs={16}
                  fw={'700'}
                  lh={25}
                  txtAlign={'center'}
                  p={'Lorem Ipsum !!!'}
                />
              </View>
              <View
                style={{
                  marginTop: '2%',
                  width: '70%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  alignSelf: 'center',
                }}>
                <InteractParagraph
                  fw={'100'}
                  ml={5}
                  lh={20}
                  color={COLORS.placholder}
                  txtAlign={'center'}
                  p={'Are you sure you want to delete your account?'}
                />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <Divider
                  style={{
                    width: '90%',
                    borderColor: COLORS.border_color,
                    shadowColor: COLORS.dark,
                    borderWidth: 1,
                  }}
                />
              </View>
              {check ? (
                <View style={{marginLeft: '5%', marginRight: '5%'}}>
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 30,
                        marginBottom: 5,
                        justifyContent: 'space-between',
                      }}>
                      <InteractParagraph
                        p={'Are you sure you want to delete?'}
                        color={COLORS.placholder}
                      />
                      <View style={{top: -8}}>
                        <RadioButton
                          color={COLORS.primary}
                          uncheckedColor={COLORS.primary}
                          value="first"
                          status={checked === 'first' ? 'checked' : 'unchecked'}
                          onPress={() => setChecked('first')}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginBottom: 5,

                        justifyContent: 'space-between',
                      }}>
                      <InteractParagraph
                        p={'Are you sure you want to delete?'}
                        color={COLORS.placholder}
                      />
                      <View style={{top: -8}}>
                        <RadioButton
                          color={COLORS.primary}
                          uncheckedColor={COLORS.primary}
                          value="two"
                          status={checked === 'two' ? 'checked' : 'unchecked'}
                          onPress={() => setChecked('two')}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginBottom: 5,

                        justifyContent: 'space-between',
                      }}>
                      <InteractParagraph
                        p={'Are you sure you want to delete?'}
                        color={COLORS.placholder}
                      />
                      <View style={{top: -8}}>
                        <RadioButton
                          color={COLORS.primary}
                          uncheckedColor={COLORS.primary}
                          value="three"
                          status={checked === 'three' ? 'checked' : 'unchecked'}
                          onPress={() => setChecked('three')}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginBottom: 5,

                        justifyContent: 'space-between',
                      }}>
                      <InteractParagraph
                        p={'Are you sure you want to delete?'}
                        color={COLORS.placholder}
                      />
                      <View style={{top: -8}}>
                        <RadioButton
                          color={COLORS.primary}
                          uncheckedColor={COLORS.primary}
                          value="forth"
                          status={checked === 'forth' ? 'checked' : 'unchecked'}
                          onPress={() => setChecked('forth')}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginBottom: 20,
                        justifyContent: 'space-between',
                      }}>
                      <InteractParagraph
                        p={'Are you sure you want to delete?'}
                        color={COLORS.placholder}
                      />
                      <View style={{top: -8}}>
                        <RadioButton
                          color={COLORS.primary}
                          uncheckedColor={COLORS.primary}
                          value="fifth"
                          status={checked === 'fifth' ? 'checked' : 'unchecked'}
                          onPress={() => setChecked('fifth')}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              ) : (
                <View>
                  <View
                    style={{
                      marginTop: '2%',
                      width: '70%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      alignSelf: 'center',
                    }}>
                    <InteractParagraph
                      fw={'100'}
                      color={COLORS.placholder}
                      ml={5}
                      lh={20}
                      txtAlign={'center'}
                      p={
                        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
                      }
                    />
                  </View>
                  <View
                    style={{
                      marginTop: '8%',
                      marginBottom: '10%',
                      width: '70%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      alignSelf: 'center',
                    }}>
                    <InteractParagraph
                      fw={'100'}
                      color={COLORS.placholder}
                      ml={5}
                      lh={20}
                      txtAlign={'center'}
                      p={
                        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                      }
                    />
                  </View>
                </View>
              )}
            </View>
            {check ? (
              <View style={{marginBottom: 30}}>
                <InteractParagraph
                  p={'Other'}
                  txtAlign={'center'}
                  fs={16}
                  fw={'700'}
                  mt={10}
                />
                <Input
                  outline={'#E8E6EA'}
                  mode={'outlined'}
                  width={'100%'}
                  //   placeholder="Your Message"
                  IconColor={COLORS.primary}
                  // Onchange={}
                  line={4}
                  multiline={true}
                  // top={-10}
                  // IconName="check"
                />
              </View>
            ) : (
              <></>
            )}
            <View>
              <ButtonComp
                btnwidth={'100%'}
                btnHeight={56}
                btnText={'Continue'}
                txtColor={COLORS.white}
                justify={'center'}
                align={'center'}
                fontSize={16}
                radius={15}
                fontStyle={'700'}
                txtwidth={'100%'}
                press={
                  check
                    ? () => navigation.navigate('signup')
                    : () => setCheck(true)
                }
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeArea>
  );
}

export default DeleteDetails;
