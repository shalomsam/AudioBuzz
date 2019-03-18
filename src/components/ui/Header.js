import React from 'react';
import { View, Text, TouchableWithoutFeedback, Platform } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { HeaderStyle } from '../../styles';

export default Header = (props) => {
  let icon = props.leftIcon || 'bars';
  let parentStyle = [HeaderStyle.container];
  let pressAction = () => props.navigation.openDrawer();
  if (props.bgColor) {
    parentStyle.push({ backgroundColor: props.bgColor });
  }
  if (props.style) {
    parentStyle.push(props.style);
  }
  if (props.leftIconPress) {
    pressAction = props.leftIconPress
  }
  return (
    <View style={parentStyle}>
      <View style={HeaderStyle.wrp}>
        <TouchableWithoutFeedback
          onPress={pressAction}
        >
          <View style={[HeaderStyle.leftIconWrp]}>
            <FontAwesomeIcon icon={icon} color={HeaderStyle.leftIcon.color} style={HeaderStyle.leftIcon} />
          </View>
        </TouchableWithoutFeedback>
        <View style={HeaderStyle.titleWrp}>
          <Text style={HeaderStyle.title}>{props.title}</Text>
        </View>
      </View>
    </View>
  )
}
