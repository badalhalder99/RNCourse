import { Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../../css/color/Colors';

function Button({ children, onPress, mode, style }) {
   return (
      <View style={style}>
         <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
            <View style={[styles.button, style]}>
               <Text style={styles.buttonText}>{children}</Text>
            </View>
         </Pressable>
      </View>
   );
}

export default Button;

const styles = StyleSheet.create({
   button: {
      borderRadius: 4,
      padding: 8,
      backgroundColor: Colors.green
   },
   buttonText: {
      color: 'white',
      textAlign: 'center',
   },
   pressed: {
      opacity: 0.75,
      backgroundColor: Colors.accent,
      borderRadius: 4,
   },
});
