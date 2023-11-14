import React, { useEffect, useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { fetchJobs } from "../api";

export default function JobCard({ press, setPress, navigation }) {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetchJobs(press).then((jobsFromApi) => {
      setJobs(jobsFromApi);
    });
  }, [press]);

  return (
    <GestureHandlerRootView>
      <ScrollView
        horizontal
        snapToInterval={140}
        style={styles.cardContainer}
        scrollEventThrottle={1}
        contentContainerStyle={styles.endPadding}
      >
        {!press ? (
          <Text style={styles.noJobsText}>Choose an area</Text>
        ) : jobs.length === 0 ? (
          <Text style={styles.noJobsText}> No jobs in {press}</Text>
        ) : (
          jobs.map((job, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.title}>{job.job_title}</Text>
              <Text style={styles.description} numberOfLines={3}>
                {job.job_desc}
              </Text>
              <Button
                title="more info"
                style={styles.button}
                onPress={() =>
                  navigation.navigate("SingleJob", {
                    jobData: { job },
                  })
                }
              />
            </View>
          ))
        )}
      </ScrollView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  card: {
    height: 160,
    width: 140,
    backgroundColor: "#D6EAEE",
    borderColor: "#0072BB",
    borderWidth: 3,
    borderStyle: "solid",
    borderRadius: 20,
    margin: 3,
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    marginTop: 18,
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 3,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
  },
  cardContainer: {
    flexWrap: "wrap",
    bottom: 0,
    marginBottom: 5,
    position: "absolute",
    flexDirection: "row",
  },

  endPadding: {
    padding: 10,
    paddingRight: 16,
  },
  noJobsText: {
    fontSize: 30,
    backgroundColor: "#D6EAEE",
  },
});
