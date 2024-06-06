import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ReadingCard from './ReadingCard'
import { getAllDays } from '../services/FirestoreServices'

const ReadingScreen = ({navigation}) => {

    // TODO: Get all Days
  // var dummyReading = {name: "Monday", icon: "sun", id: "123456789"}

  useEffect(() =>{
    handleGettingDays()
  }, [])

    const [days, setDays] = useState([])

    const handleGettingDays = async() => {
        var daysData = await getAllDays()
        setDays(daysData)
    }

  return (
    <View style={styles.container}>
      <Button title='Add Reading' onPress={() => navigation.navigate("Add")} />
      {days != [] ? (
        days.map((day, index) => (
          <ReadingCard day={day} key={day.id}/>
        ))  
      ): null}
      

    </View>
  )
}

export default ReadingScreen

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})