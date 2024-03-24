import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Audio } from 'expo-av';
import { Permissions } from 'expo-permissions';

const Recorder = () => {
  const [recording, setRecording] = useState(false);
  const [recordingInstance, setRecordingInstance] = useState(null);
  const [recordings, setRecordings] = useState([]);

  useEffect(() => {
    getMicrophonePermission();
    loadRecordings();
  }, []);

  const getMicrophonePermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.RECORD_AUDIO);
    if (status !== 'granted') {
      console.error('Microphone permission not granted!');
    }
  };

  const startRecording = async () => {
    try {
          
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recording.startAsync();
      setRecordingInstance(recording);
      setRecording(true);
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  };

  const stopRecording = async () => {
    try {
      await recordingInstance.stopAndUnloadAsync();
      setRecording(false);
      saveRecording(recordingInstance.getURI());
      loadRecordings();
    } catch (error) {
      console.error('Error stopping recording:', error);
    }
  };

const saveRecording = async (uri) => {
  try {
    const existingRecordings = await AsyncStorage.getItem('recordings');
    const recordingsArray = existingRecordings ? JSON.parse(existingRecordings) : [];
    recordingsArray.push(uri);
    await AsyncStorage.setItem('recordings', JSON.stringify(recordingsArray));
    loadRecordings(); // Reload the recordings after saving
  } catch (error) {
    console.error('Error saving recording:', error);
  }
};

const loadRecordings = async () => {
  try {
    const existingRecordings = await AsyncStorage.getItem('recordings');
    if (existingRecordings !== null) {
      const recordingsArray = JSON.parse(existingRecordings);
      setRecordings(recordingsArray);
    }
  } catch (error) {
    console.error('Error loading recordings:', error);
  }
};

const playRecording = async (uri) => {
  try {
    const { sound } = await Audio.Sound.createAsync({ uri });
    await sound.playAsync();
  } catch (error) {
    console.error('Error playing sound:', error);
  }
};

const removeRecord = async (uri) => {
      const existingRecordings = await AsyncStorage.getItem('recordings');
    let recordingsArray = existingRecordings ? JSON.parse(existingRecordings) : [];
    if(recordingsArray.length) {
      recordingsArray = recordingsArray.filter(record => record !== uri)
      await AsyncStorage.setItem('recordings', JSON.stringify(recordingsArray));
      setRecordings(recordingsArray)
    }
}

  return (
    <View style={styles.center}>
<View style={[styles.w_full, styles.center]}>
      <Text className="bg-red-600">Audio Recorder</Text>
      <TouchableOpacity onPress={recording ? stopRecording : startRecording} style={[styles.btn, styles.p_4, styles.mb_4, recording ? styles.red : styles.green]}>
        <Text style={styles.textWhite}>{recording ? 'Stop Recording' : 'Start Recording'}</Text>
      </TouchableOpacity>
</View>

<View style={[styles.w_full, styles.center, styles.mb_4]}>
      <Text>Recorded Voices:</Text>
            <TouchableOpacity onPress={loadRecordings} style={[styles.btn, styles.p_4]}>
        <Text>Loading Records</Text>
      </TouchableOpacity>
</View>
<View style={styles.w_full}>
      <FlatList
        data={recordings}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={[styles.flex_row, styles.justifyContent_between, styles.p_4, styles.mb_4]}>
          <TouchableOpacity onPress={() => playRecording(item)}>
            <Text>⏯️Record: {index + 1}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => removeRecord(item)}>
            <Text>❌</Text>
          </TouchableOpacity>
          </View>
        )}
      />
</View>
    </View>
  );
};

const styles = StyleSheet.create({
  w_full: {
    width: '100%',
  },
  flex_row: {
flexDirection: "row",
  },
  justifyContent_between: {
justifyContent:'space-between'
  },
  btn: {
    width: '40%',
    display: 'flex',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    marginHorizontal: 'auto',
  },
  p_4: {
    padding: 4,
  },
  green: {
    backgroundColor: 'green',
  },
    red: {
    backgroundColor: 'red',
  },
  textWhite: {
    color: '#ffffff'
  },
  center: {
    alignItems: "center",
    gap: 4
  },
  mb_4: {
    marginBottom: '1rem'
  }
});

export default Recorder;
