### MI PRIMER APP - CONTADOR
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

### MAQUETACION
- Box Object Mode => it makes mention to the box dimensions that occupies the component: weight, height, margin, padding, border....
- Position => it makes mention to the box position that occupies the component: absolute/relative, top, left, right, bottom....
- Flex Box => it makes mention to the box behavior that occupies the component: align, direction, flex....
- In React Native, all components have: margin 0, padding 0 and border 0.
- The 'saveareview' tag is used to use the real area of mobile, excluding the notch
- By default all react-native components have the entire width of the screen.
- To know the dimension of the screen, we use the propertie of react-native called 'Dimensions', but only give us the real dimension without considerate the orientation of thes creen
```typescript
  const {width,height} = Dimensions.get('window');
```
- Other way to have the dimensions of the screen is using the hook 'useWindowDimensions', then destructuring height and width
- Both ways could be usefull to give to component relative dimensions, this way
```tsx
  function DimensionesScreen() {
  const dimensionsHook = useWindowDimensions();
    return ( 
      <View>
        <View style={styles.container}>
          <View style={{
            ...styles.firstBox,
            width: dimensionsHook.width*0.2 //<========
          }}/> 
        </View>
      </View>
    );
  }
```
- Flex is a propertie that is the same to 'fr' of CSS, depending of the direction.
- Only use alignContent  with flexWrap.
- The porcentage is the same that viewport in css.

### PROYECTO CALCULADORA

- You can see all string colors in this [link](https://reactnative.dev/docs/colors#color-apis)
- To give styles to notification bar, we use 'StatusBar' tag [documentation](https://reactnative.dev/docs/statusbar)

### NAVIGATION

- to start we need to install [react navigation](https://reactnavigation.org/docs/getting-started/) following the steps

- *stack.navigation*: we need to follow the [steps](https://reactnavigation.org/docs/stack-navigator) 
- we can chose 2 forms to implement the navigation in a tsx component, both works at the same form, but using props is mor efitient
  ```typescript
    //form 1
     const navigation = useNavigation();
  ```
  ```typescript
    //form 2
    interface Props extends StackScreenProps<any,any>{};

    function Pagina1Screen(props:Props) {
      const {navigation} = props;
      //...
    }
  ```
  ```typescript
    //navigation
    <Button
        title="Ir página 2"
        onPress={()=> navigation.navigate('Pagina2Screen')}
      />
  ```

- *drawer.navigation*: render a navigaion drawer on the side of the screen wich can be opened an closed via gestures [documentation](https://reactnavigation.org/docs/drawer-navigator)
  to it works good, you need to add this text in the babel.config.ts 'plugins: ['react-native-reanimated/plugin']'


- *BottomTap.Navigation*: Los tabs no son cargados de manera simultanea, son cargados bajo demanda, pero cuando fueron cargados se mantienen activos, [documentation](https://reactnavigation.org/docs/bottom-tab-navigator)






























Si hay algun proble acon las dependencias de IOS (video 04 del proyecto calculadora)