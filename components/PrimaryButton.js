import { View, Text, Pressable } from 'react-native';
import { styles } from '../css/PrimaryButtonStyles';

function PrimaryButton({ children }) {

   const pressHandler = () => {
      console.log("pressed!")
   }
   return (
      <View style={styles.buttonOuterContainer}>
         <Pressable
            onPress={pressHandler}
            style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
            android_ripple={{ color: '#640233' }}
         >
            <Text style={styles.buttonText}>{children}</Text>
         </Pressable>
      </View>

   );
}

export default PrimaryButton;
