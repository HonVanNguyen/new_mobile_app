import { StyleSheet } from "react-native";

export const SessionNotifyStyle = StyleSheet.create({
  common: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
    flex: 1,    
  },
  top:{
    height: 100,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10
  },
  textTitle: {
    fontSize: 40
  },
  bottom: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    gap: 20,
    paddingBottom: 150
  },
  imageBot:{
    width: 150,
    height: 150
  },
  textBot:{
    fontSize: 16
  }
});
