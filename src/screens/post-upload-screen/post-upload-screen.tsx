import {useEffect, useState, useRef} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Pressable} from 'react-native';
import {
  Camera,
  CameraPictureOptions,
  CameraRecordingOptions,
  CameraType,
  FlashMode,
  PermissionStatus,
  VideoQuality,
} from 'expo-camera';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../themes/colors';

const flashModes = [
  FlashMode.off,
  FlashMode.on,
  FlashMode.auto,
  FlashMode.torch,
];

const flashModeToIcon = {
  [FlashMode.off]: 'flash-off',
  [FlashMode.on]: 'flash-on',
  [FlashMode.auto]: 'flash-auto',
  [FlashMode.torch]: 'highlight',
};

export function PostUploadScreen() {
  const [hasPermissions, setHasPermissions] = useState<boolean | null>(null);
  const [cameraType, setCameraType] = useState<CameraType>(CameraType.back);
  const [flash, setFlash] = useState<FlashMode>(FlashMode.off);
  const [isCameraReady, setIsCameraReady] = useState<boolean>(false);
  const [isRecording, setIsRecording] = useState(false);

  const cameraRef = useRef<Camera>(null);

  useEffect(() => {
    const getPermisison = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission =
        await Camera.requestMicrophonePermissionsAsync();

      setHasPermissions(
        cameraPermission.status === PermissionStatus.GRANTED &&
          microphonePermission.status === PermissionStatus.GRANTED,
      );
    };
    getPermisison();
  }, []);

  const flipCamera = () => {
    setCameraType(type =>
      type === CameraType.back ? CameraType.front : CameraType.back,
    );
  };

  const switchFlash = () => {
    const currentIndex = flashModes.indexOf(flash);
    const nextIndex =
      currentIndex === flashModes.length - 1 ? 0 : currentIndex + 1;

    setFlash(_ => flashModes[nextIndex]);
  };

  const takePicture = async () => {
    if (!isCameraReady || !cameraRef.current || isRecording) {
      return;
    }

    const options: CameraPictureOptions = {
      quality: 0.7,
      base64: false,
      skipProcessing: true,
    };

    const result = await cameraRef.current.takePictureAsync(options);
  };

  const startRecording = async () => {
    if (!isCameraReady || !cameraRef.current || isRecording) {
      return;
    }
    const options: CameraRecordingOptions = {
      quality: VideoQuality['4:3'],
      maxDuration: 60,
      maxFileSize: 10 * 1024 * 1024,
      mute: false,
    };
    try {
      const result = await cameraRef.current.recordAsync(options);
    } catch (e) {
      console.log(e);
    } finally {
      setIsRecording(false);
    }
  };
  const stopRecording = () => {
    if (isRecording) {
      cameraRef.current?.stopRecording();
      setIsRecording(false);
    }
  };

  if (hasPermissions === null) {
    return <Text>Loading...</Text>;
  } else if (!hasPermissions) {
    return <Text>No access to the camera</Text>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.page}>
        <View style={styles.buttonsContainer}>
          <MaterialIcons name="close" size={30} color={colors.white} />
          <Pressable onPress={switchFlash}>
            <MaterialIcons
              name={flashModeToIcon[flash]}
              size={30}
              color={colors.white}
            />
          </Pressable>
          <MaterialIcons name="settings" size={30} color={colors.white} />
        </View>
        <Camera
          ref={cameraRef}
          style={styles.camera}
          type={cameraType}
          ratio="4:3"
          flashMode={flash}
          onCameraReady={() => {
            console.log('running ready');
            setIsCameraReady(true);
          }}
        />
        <View style={styles.buttonsContainer}>
          <MaterialIcons name="photo-library" size={30} color={colors.white} />
          {isCameraReady && (
            <Pressable onPress={takePicture}>
              <View
                style={[
                  styles.circle,
                  {backgroundColor: isRecording ? colors.accent : colors.white},
                ]}
              />
            </Pressable>
          )}
          <Pressable
            onPress={flipCamera}
            onLongPress={startRecording}
            onPressOut={stopRecording}>
            <MaterialIcons
              name="flip-camera-ios"
              size={30}
              color={colors.white}
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    width: '100%',
    aspectRatio: 3 / 4,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  circle: {
    width: 75,
    aspectRatio: 1,
    borderRadius: 75,
    backgroundColor: colors.white,
  },
});
