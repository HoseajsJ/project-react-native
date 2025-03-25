import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Text, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Calendar } from 'react-native-calendars';

const dummySchedule = [
  {
    id: '1',
    title: 'Consultation with Dr. Sinta',
    time: 'March 28, 2025 - 10:00 AM',
  },
  {
    id: '2',
    title: 'Follow-up Lab Test',
    time: 'March 29, 2025 - 02:00 PM',
  },
];

const ScheduleScreen = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [markedDates, setMarkedDates] = useState<any>({
    '2024-06-09': { selected: true, marked: true, selectedColor: 'green' },
    '2024-06-10': { selected: true, marked: true, selectedColor: 'green' },
    '2024-06-11': { selected: true, marked: true, selectedColor: 'green' },
    '2024-06-26': { selected: true, marked: true, selectedColor: 'blue' }, // Progress day
  });

  const handleDateChange = (day: any) => {
    setSelectedDate(day.dateString);
    const updatedMarkedDates = { ...markedDates };
    updatedMarkedDates[day.dateString] = { selected: true, selectedColor: 'blue' };
    setMarkedDates(updatedMarkedDates);
  };

  const handleAddSchedule = () => {
    Alert.alert("Add Schedule", "You can add a schedule here!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Schedule Calendar</Text>
      <Text style={styles.subtitle}>June 2024</Text>

      {/* Calendar */}
      <Calendar
        current={'2024-06-26'}
        markedDates={markedDates}
        onDayPress={handleDateChange}
        theme={{
          todayTextColor: '#00adf5',
          arrowColor: 'orange',
          monthTextColor: 'purple',
        }}
      />

      {/* Add Schedule Button */}
      <Button mode="contained" onPress={handleAddSchedule} style={styles.addButton}>
        Add Schedule
      </Button>

      {/* Displaying Schedule List */}
      <Text style={styles.scheduleTitle}>Your Schedule</Text>

      {dummySchedule.length > 0 ? (
        <View style={styles.scheduleList}>
          {dummySchedule.map(item => (
            <Card style={styles.card} key={item.id}>
              <Card.Content>
                <Title>{item.title}</Title>
                <Paragraph>{item.time}</Paragraph>
              </Card.Content>
            </Card>
          ))}
        </View>
      ) : (
        <Text>No schedules added yet</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F8FAFB',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1A3C40',
  },
  subtitle: {
    fontSize: 18,
    color: '#5A5A5A',
    marginBottom: 20,
  },
  addButton: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#28a745',
  },
  scheduleTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#1A3C40',
  },
  scheduleList: {
    marginTop: 10,
  },
  card: {
    marginBottom: 12,
    borderRadius: 12,
  },
});

export default ScheduleScreen;
