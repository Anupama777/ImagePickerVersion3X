import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    
  
    screen: {
        padding: 50,
        flex: 1,
        backgroundColor:'#48D1CC'
      },
      headerLink: {
        color:"#000000",
        fontWeight:"bold",
        fontSize: 16,
        padding:50,
        paddingLeft:110
      },
      LocationStyle:{
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor:'#F08080',
        borderWidth:.5,
        borderColor:'#fff',
        height:40,
        borderRadius:5,
        margin:5

      },
      ImageIconStyle:{

        padding:10,
        margin:5,
        height:25,
        width:25,
        resizeMode: 'stretch',
      },
      TextStyle:{

        color:'#000',
        fontWeight:'bold',
        marginBottom:4,
        marginRight:20,
        paddingLeft:80
       
      },
      SeparatorLine: {
        backgroundColor:'#fff',
        width:1,
        height:40
      }

})