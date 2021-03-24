
import * as React from 'react';
import { useState } from 'react';
import {StyleSheet,View,Button,Image,FlatList,Text, TouchableOpacity} from 'react-native'
import {IconButton,Colors} from 'react-native-paper'
//import AboutScreen from './AboutScreen/AboutScreen'
import GoalItem from '../../components/GoalItem';
import GoalInput from '../../components/GoalInput';
import styles from './styles';



export default function HomeScreen({navigation}) {

    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

    const onHeaderLinkPress = () => {
     navigation.navigate('AboutScreen')
        
      };

      const onLocationLinkPress= () => {
        navigation.navigate('LocationScreen')
           
         };

     const onImageLinkPress= () => {
        navigation.navigate('ImageScreen')
           
         };
  
    const addGoalHandler = goalTitle => {
      setCourseGoals(currentGoals => [
        ...currentGoals,
        { id: Math.random().toString(), value: goalTitle }
      ]);
      setIsAddMode(false);
    };
  
    const removeGoalHandler = goalId => {
      setCourseGoals(currentGoals => {
        return currentGoals.filter(goal => goal.id !== goalId);
      });
    };
  
    const cancelGoalAdditionHandler = () => {
      setIsAddMode(false);
    };
  
    return (
        
      <View style={styles.screen}>


         {/*<IconButton icon="camera" color={Colors.red500} size={20} mode="contained" onPress={()=> navigation.navigate('ImageScreen')}>Camera</IconButton>*/}
      

      <TouchableOpacity style={styles.LocationStyle} activeOpacity={0.5}>

        <Image source={require('../../../assets/photo-camera.png')} style={styles.ImageIconStyle} />
        <View style={styles.SeparatorLine}/>

        <Text onPress={onImageLinkPress} style={styles.TextStyle}>
            Select Image
        </Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.LocationStyle} activeOpacity={0.5}>

        <Image source={require('../../../assets/map.png')} style={styles.ImageIconStyle} />
        <View style={styles.SeparatorLine}/>

        <Text onPress={onLocationLinkPress} style={styles.TextStyle}>
            View Location
        </Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.LocationStyle} activeOpacity={0.5}>

       <Image source={require('../../../assets/information.png')} style={styles.ImageIconStyle} />
       <View style={styles.SeparatorLine}/>

      <Text onPress={onHeaderLinkPress} style={styles.TextStyle}>
        About
      </Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.LocationStyle} activeOpacity={0.5}>

       <Image source={require('../../../assets/goal.png')} style={styles.ImageIconStyle} />
       <View style={styles.SeparatorLine}/>

      <Text onPress={() => setIsAddMode(true)} style={styles.TextStyle}>
      Add New Goal
      </Text>

      </TouchableOpacity>


        <GoalInput
          visible={isAddMode}
          onAddGoal={addGoalHandler}
          onCancel={cancelGoalAdditionHandler}
        />
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem
              id={itemData.item.id}
              onDelete={removeGoalHandler}
              title={itemData.item.value}
            />
          )}
        />
          
       
       
       
      </View>
    
    
        
    );
  }
  
  //const styles = StyleSheet.create({
   
 // });

