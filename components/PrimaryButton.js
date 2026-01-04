import { View, Text, Pressable } from 'react-native';
import { styles } from '../css/PrimaryButtonStyles';

function PrimaryButton({ children, onPress }) {

   return (
      <View style={styles.buttonOuterContainer}>
         <Pressable
            onPress={onPress}
            style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
            android_ripple={{ color: '#640233' }}
         >
            <Text style={styles.buttonText}>{children}</Text>
         </Pressable>
      </View>

   );
}

export default PrimaryButton;
