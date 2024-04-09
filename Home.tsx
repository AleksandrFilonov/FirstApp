import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import { Image } from "expo-image";

const Home = () => {
  
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  
  const [BMI, setBMI] = useState(0.0);

  // const regex = /[A-Za-z]/g;
  // const found = height.match(regex);
  // const found2 = weight.match(regex);

//  React.useEffect(() => {
  //  отрабатывает код внутри себя тогда когда изменяются значения в его квадратных скобках,
   // есои там пусто - то он отрабатывает 1 раз в самом начале перед рендером экрана
//    setHeight("  ");
//  }, [found]);
//  React.useEffect(() => {
  
//    setWeight("  ");
//  }, [found2]);

function urFunc(height: string): string {
  if (height.length <= 0) {
      return '';
  } else {
      let res = '';
      const regex = /[0-9]/g;
      res = height.match(regex)?.join('') || '';
      return res;
  }
}

function urFunc1(weight: string): string {
  if (weight.length <= 0) {
      return '';
  } else {
      let res = '';
      const regex = /[0-9]/g;
      res = weight.match(regex)?.join('') || '';
      return res;
  }
}

  const handlerCalcBMI = () => {
    const currentWeight = parseInt(weight);
    const currentHeight = parseInt(height);
    
    

  //   if (isNaN(currentWeight) || isNaN(currentHeight)) {
  //    return;
  //  }
  

    const heightMetrs = currentHeight / 100;
    setBMI(Number((currentWeight / (heightMetrs * heightMetrs)).toFixed(1)));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>BMI Calculator</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={height}
          onChangeText={(value) => {
            setHeight(urFunc(value));
          }}
          style={styles.input}
          placeholder="Heigth-M"
          placeholderTextColor={"rgba(90,90,190,1)"}
          keyboardType="number-pad"
        />
        <TextInput
          value={weight}
          onChangeText={(value) => {
            setWeight(urFunc1(value));
          }}
          style={styles.input}
          placeholder="Weigth-KG"
          placeholderTextColor={"rgba(90,90,190,1)"}
          keyboardType="number-pad"
        />
      </View>

      <TouchableOpacity
      
      
      disabled={!weight || !height}
     
        style={[styles.goButton,
          height.length >= 1 && weight.length >= 1 && { opacity: 1 },
        ]}
        onPress={() => {
          handlerCalcBMI();
        }}
      >
        <Text style={styles.goButtonText}>Go</Text>
      </TouchableOpacity>

      <Text style={styles.BMIText}>{BMI}</Text>

      <View style={styles.line} />

      <View style={styles.ColorContainer}>
        <View
          style={[
            styles.YellowBlock,
            BMI <= 18.5 && BMI >= 1 && { opacity: 1 },
          ]}
        >
          <Image
            style={styles.YellowImage}
            source={require("./assets/yellow.png")}
            contentFit="fill"
          />
          <Text style={styles.valueText}>Under 18</Text>
          <Text style={styles.noteText}>Under Weight</Text>
        </View>

        <View
          style={[styles.GreenBlock, BMI > 18.5 && BMI < 25 && { opacity: 1 }]}
        >
          <Image
            style={styles.GreenImage}
            source={require("./assets/green.png")}
            contentFit="fill"
          />
          <Text style={styles.valueText}>18.5 - 25</Text>
          <Text style={styles.noteText}>Normal Weight</Text>
        </View>

        <View style={[styles.RedBlock, BMI >= 25 && { opacity: 1 }]}>
          <Image
            style={styles.RedImage}
            source={require("./assets/red.png")}
            contentFit="fill"
          />
          <Text style={styles.valueText}>Above 25</Text>
          <Text style={styles.noteText}>Over Weight</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(50,50,50,1)",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    color: "rgba(180, 168, 45, 1)",
    fontSize: 25,
  },

  inputContainer: { flexDirection: "row", gap: 50, marginTop: 50 },

  input: {
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    width: 130,
    padding: 10,
    color: "white",
  },

  goButton: {
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingVertical: 7,

    borderRadius: 10,

    marginTop: 30,
    opacity: 0.3,
  },

  goButtonText: {
    fontWeight: "500",
    fontSize: 16,
  },

  BMIText: {
    color: "rgba(180, 168, 45, 1)",
    fontSize: 35,
    marginTop: 40,
  },

  line: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    height: 2,

    marginTop: 100,
  },

  ColorContainer: {
    flexDirection: "row",
    gap: 15,

    marginTop: 20,

    paddingHorizontal: 15,
  },

  YellowBlock: {
    backgroundColor: "yellow",
    borderRadius: 15,
    height: 300,
    width: 110,

    alignItems: "center",

    opacity: 0.3,
  },
  GreenBlock: {
    backgroundColor: "green",
    borderRadius: 15,
    height: 300,
    width: 110,

    alignItems: "center",

    opacity: 0.3,
  },
  RedBlock: {
    backgroundColor: "red",
    borderRadius: 15,
    height: 300,
    width: 110,

    alignItems: "center",

    opacity: 0.3,
  },
  YellowImage: {
    width: 120,
    height: 70,
    marginTop: 40,
  },
  GreenImage: {
    width: 120,
    height: 90,
    marginTop: 20,
  },
  RedImage: {
    width: 120,
    height: 90,
    marginTop: 20,
  },
  valueText: { fontSize: 15, fontWeight: "600", marginTop: 30 },
  noteText: { fontSize: 15, fontWeight: "600", marginTop: 30 },
});

export default Home;