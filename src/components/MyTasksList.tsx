import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  isEnabled:boolean;
}

export function MyTasksList({ tasks, onLongPress, onPress, isEnabled }: MyTasksListProps, {...otherProps}) {

  function FlatListHeaderComponent() {
    return (
      <View>
        <Text style={isEnabled ? styles.headerSwitch : styles.header}>Minhas tasks</Text>
      </View>
    )
  }

  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={item.done ? isEnabled ? styles.taskButtonDoneSwitch : styles.taskButtonDone : styles.taskButton}
            //TODO - use onPress, onLongPress and style props
          >
            <View 
              testID={`marker-${index}`}
              style={item.done ? isEnabled ?styles.taskMarkerDoneSwitch : styles.taskMarkerDone : isEnabled ? styles.taskMarkerSwitch : styles.taskMarker}
            />
            <Text 
              style={item.done ? isEnabled ? styles.taskTextDoneSwitch : styles.taskTextDone : isEnabled ? styles.taskTextSwitch : styles.taskText}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    color: '#3D3D4D',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  headerSwitch: {
    color: '#BF4AD4',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  taskMarkerSwitch: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#12A952',
    marginRight: 10
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskTextSwitch: {
    color: '#FFF',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskButtonDoneSwitch: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: '#242424',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10
  },
  taskMarkerDoneSwitch: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#12A952',
    marginRight: 10
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  },
  taskTextDoneSwitch: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  }
})