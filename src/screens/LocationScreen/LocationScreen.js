import React,{useState} from 'react';
import {Text, View,Button} from 'react-native';
import RNLocation from 'react-native-location';
import styles from './styles';


RNLocation.configure({
  distanceFilter: 1,
});

//distanceFilter - minimum distance in meters that a device
//location will change before a new location is updated
 export default LocationScreen = () => {
  //click on Get location - action

  const [viewLocation,isViewLocaion] = useState([]);
  //const [tweet, setTweet] = useState([showLocation.longitude, showLocation.latitude]);
  const permissionHandle = async () => {
    console.log('inside the async call-1');
    //CHECK IF LOCATION ACCESS IS PERMITTED OR NOT
    let permission = await RNLocation.checkPermission({
      ios: 'whenInUse', // or 'always'
      android: {
        detail: 'coarse', //or 'fine'
      },
    });
    console.log('inside the async call-2');
    console.log(permission);
    //REQUEST THE LOCATION
    permission = await RNLocation.requestPermission({
      ios: 'whenInUse', // or 'always'
      android: {
        detail: 'coarse',
        rationale: {
          title: 'We need to access your location',
          message: 'We use your location to show where you are on the map',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      },
    });
    console.log('after requesting the permission: user responded with');
    console.log(permission);
    //check permission and make it compulsory to give access to your location
    let location;

    if (!permission) {
      //if the permission is not given
      permission = await RNLocation.requestPermission({
        ios: 'whenInUse',
        android: {
          detail: 'coarse',
          rationale: {
            title: 'We need to access your location',
            message: 'We use your location to show where you are on the map',
            buttonPositive: 'OK',
            buttonNegative: 'Cancel',
          },
        },
      });
      console.log(permission);
      location = await RNLocation.getLatestLocation({timeout: 100});
      console.log(
        location,
        location.longitude,
        location.latitude,
        location.timestamp,
      );
    } else {
      console.log('Here 7');
      location = await RNLocation.getLatestLocation({timeout: 100});
      console.log(
        
        location.longitude,
        location.latitude,
        location.timestamp,
      );
      isViewLocaion(location);
    }
  };

   


  return (
    <View>
      <View
        style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
        <Button title="Get Location" onPress={permissionHandle} />
      </View>
      <Text style={styles.TextStyles}>Latitude:{viewLocation.latitude}</Text>
     
      <Text style={styles.TextStyles}>Longitude:{viewLocation.longitude}</Text>
     
    </View>
  );
};



