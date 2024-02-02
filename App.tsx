import { SafeAreaView } from 'react-native';

import { Arreglo } from './src/Screem/Arreglo';
import { PositionScreen } from './src/Screem/PositionScreen';


const App =()=>{
  return(
    <SafeAreaView style={{flex:1}}>
    {/* <Arreglo/> */}
  <PositionScreen/>
    </SafeAreaView>
  
  )
}
export default App;