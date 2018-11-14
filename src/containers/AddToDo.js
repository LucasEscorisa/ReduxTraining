import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";

class AddToDo extends Component{
    render() {
        return (
            <View style={{flexDirection: 'row', marginHorizontal: 20}}>
                <TextInput 
                    placeholder="Eg. Create New Video"
                    style={{borderWidth: 1, borderColor: '#f2f2e1',
                    backgroundColor: '#eaeaea', height: 50, flex: 1, padding: 5 }} 
                />
                <TouchableOpacity onPress={()=>alert('added todo')}>
                    <View style={{height: 50, backgroundColor: '#eaeaea'}}>

                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default AddToDo;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});