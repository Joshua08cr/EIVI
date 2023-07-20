import React from "react";
import { View, StyleSheet } from 'react-native'
import UnityView from 'react-native-unity-view';

const Ciencias = () => {
    useEffect(() => {
      UnityView.postMessage('LoadModel', '../components/celula.fbx');
    }, []);

    return (
      <View style={styles.container}> 
        <UnityView style={styles.unityView}/>
      </View>
    )
  }
   
  export default Ciencias

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    unityView: {
      flex: 1,
    },
  });
