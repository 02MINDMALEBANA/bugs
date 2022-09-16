import { async } from '@firebase/util';
import { addDoc, collection, getDoc, getDocs } from 'firebase/firestore';
import React,{useEffect, useState} from 'react';
import {Modal, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Pressable, TextInput, Button } from 'react-native';
import { db } from './firebase';
import { FlatGrid } from 'react-native-super-grid';


const Reatjs = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [post,setPost] = useState('')
    const [posts, setPosts] = useState([])
    console.log(post)
    console.log('posts', posts)
        const clickHandler = () => {
          //function to handle click on floating Action Button
          alert('Floating Button Clicked');
        };



        //function to post a bug
        const postBug  = () =>{

           setModalVisible(!modalVisible)
             const postRef = collection(db,'posts')

             const postDetails = {
                 bugInfo:post,
                
             }

             addDoc(postRef,postDetails).then(()=>{
                alert('posted successfully')
             }).catch((err)=>{
                console.log(err)
             })
             
        }

        //getting data from backend 
        const getPosts = async()=>{

            const postRef = collection(db,'posts')

            const data = await getDocs(postRef)

            console.log(data.docs.map((res)=>({...res.data(), id:res.id})))
            setPosts(data.docs.map((res)=>({...res.data(), id:res.id})))
        
        }



        //useEffect
        useEffect(()=>{
            getPosts()

        },[])


    return (
        <>
            <View style={styles.centeredView}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    presentationStyle={'fullScreen'}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View>
                                <View style={styles.form} >
                                    <Text style={{ color: 'white' }}>Post</Text>
                                    <TextInput
                                        style={{
                                            margin: 20,
                                            width: 200,
                                            alignSelf: 'center', borderWidth: 2, borderColor: 'white'
                                        }}
                                        placeholder='type in your problem'
                                        onChangeText={(post) => setPost(post)}
                                        value={post}

                                    >

                                    </TextInput>

                                    <Button style={{ marginTop: 20 }} onPress={postBug} >Upload</Button>
                                </View>
                            </View>

                            <Pressable
                                style={[styles.button, styles.buttonClose]}

                            >

                            </Pressable>
                        </View>
                    </View>
                </Modal>

            </View>
            <SafeAreaView style={styles.container}>
                {
                    posts.map((res) => (
                        <View style={styles.post}>
                            {

                            }
                            <Text>

                                {res.bugInfo}
                            </Text>

                        </View>
                    ))
                }
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => setModalVisible(true)}

                    style={styles.touchableOpacityStyle}>
                    <Image
                        //We are making FAB using TouchableOpacity with an image
                        //We are using online image here
                        source={{
                            uri:
                                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
                        }}
                        //You can use you project image Example below
                        //source={require('./images/float-add-icon.png')}
                        style={styles.floatingButtonStyle}
                    />
                </TouchableOpacity>

            </SafeAreaView>
    
        </>
       
        
    );
}

const styles = StyleSheet.create({
    form:{
           width:'50%',
           backgroundColor:'grey',
           alignSelf:"center",
           padding:20,
           height:200
    },
    modalView:{
          backgroundColor:'grey',
          marginTop:200,
          width:'80%',
          alignSelf:'center',
          height:300,
          borderRadius:15
    },
    post:{
        borderColor:"#000000",
        borderWidth:1,
        width:300,
       
        borderRadius:15,
        alignSelf:"center",
        marginTop:15,
        padding:20
    },
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 10,
    },
    titleStyle: {
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 10,
    },
    textStyle: {
      fontSize: 16,
      textAlign: 'center',
      padding: 10,
    },
    touchableOpacityStyle: {
      position: 'absolute',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      right: 30,
      bottom: 30,
    },
    floatingButtonStyle: {
      resizeMode: 'contain',
      width: 50,
      height: 50,
      //backgroundColor:'black'
    },
  });


export default Reatjs;
