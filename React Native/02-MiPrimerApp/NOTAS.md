- We name 'screen' to componente that uses entire screen
- By default react native's all components are position: relative.
- Exist three types of buttons with styles by default: TouchableOpacity, TouchableWithoutFeedback and TouchableHighlight, you can see the documentation in this [link](https://reactnative.dev/docs/components-and-apis)
- To make a propertie of an Interface in Typescript optional, use a '?' after the name of the propertie
  ```typescript
    interface Props{
      title: string,
      position?: 'br' | 'bl',
      onPress: Function,
    }
  ```
- To send many styles, we need to use in array form
  ```tsx
    <TouchableOpacity
      style={[style.fabLocation,(position=='bl') ? style.bl : style.br]}>

        <Text style={style.textFab}>{title}</Text>

    </TouchableOpacity>
  ```
- To know what platform we are using, we need to import Platform, then use Platform.OS
