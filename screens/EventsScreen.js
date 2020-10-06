import React from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default class Events extends React.Component {
  state = {
    events: [],
  };
  componentDidMount() {
    axios.get("http://10.0.3.2:3333/event/list").then((res) => {
      this.setState({ events: res.data });
      console.log(this.state.events);
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Events</Text>
        <View>
          {this.state.events.map((event, index) => (
            <TouchableOpacity key={index} style={styles.event}>
              <Text>
                {event.title} - {event.description}!
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
  },
  event: {
    padding: 10,
    marginTop: 3,
    backgroundColor: "#d9f9b1",
    alignItems: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
});
