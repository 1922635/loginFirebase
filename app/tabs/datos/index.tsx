import { View, Text, FlatList, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { GlobalStyles } from '@/theme/GlobalStyles';
import { auth, db } from '@/Firebaseconfig';
import { addDoc, collection, deleteDoc, doc, getDocs, query } from 'firebase/firestore';
import { Boton1 } from '@/components/boton1';





const ScreenConfiguracion = () => {

  const user = auth.currentUser;
  const coleccionTareas = collection(db, 'tareas');
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState<any>([]);

  useEffect(() => {
    cargarDatos();
  }, [user]);

  const cargarDatos = async () => {
    if (user) {
      const q = query (coleccionTareas);
      const datos = await getDocs(q);
      setTareas(datos.docs.map((doc) => ({...doc.data(), id: doc.id})))
      console.log(tareas)
    }
  };

  const addTarea= async () => {
    if (user) {
      await addDoc(coleccionTareas, {tarea, finalizada: false});
      setTarea('a');
      cargarDatos();
    } else {
      console.log("Para añadir una tarea es preciso logearse primero")
    }
  };

  const borrarTarea = async (id: string) => {
    const referenciaTarea = doc(coleccionTareas, id);

    await (deleteDoc(referenciaTarea));
    console.log("Tarea eliminada: " + referenciaTarea);
    cargarDatos();
  };

  return (
    <View style={GlobalStyles.containerCentrado}>
      
      <View style={GlobalStyles.containerLinea}>
        <TextInput style={[GlobalStyles.textImput, {width: 200}]} placeholder='cosas' onChangeText={setTarea}></TextInput>
        <Boton1 label='add' onPress={addTarea} estilo1={[GlobalStyles.boton, {width: 80}]}></Boton1>
      </View>
      
      <FlatList data={tareas}
                style={{ width: '100%'}}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {
                  return (
                    <View style={GlobalStyles.containerLinea}>
                      <Text style={GlobalStyles.texto}>{item.tarea}</Text>
                    </View>
                  )
                }}>
      </FlatList>
    </View>
  )
}

export default ScreenConfiguracion