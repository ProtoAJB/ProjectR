import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';

const centerX = 200; // Center X of the oval
const centerY = 210; // Center Y of the oval
const ovalWidth = 150; // Horizontal stretch
const ovalHeight = 200; // Vertical stretch

// Generate beads in an oval shape, starting from the diamond at the bottom
//  const diamond =  // Diamond (START)

  const beadsSequence = [
    { cx: centerX, cy: centerY + ovalHeight / 2 + 195, size: 10 }, // Large bead
    { cx: centerX, cy: centerY + ovalHeight / 2 + 170, size: 8 }, // Small bead
    { cx: centerX, cy: centerY + ovalHeight / 2 + 148, size: 8 }, // Small bead
    { cx: centerX, cy: centerY + ovalHeight / 2 + 125, size: 10 }, // Bottom Connection Bead
    ...Array.from({ length: 55 }, (_, i) => ({
      cx: centerX + ovalWidth * Math.cos(((i - 14.5) * 2 * Math.PI) / 54), // Offset to start left of the diamond
      cy: centerY - ovalHeight * Math.sin(((i - 14.5) * 2 * Math.PI) / 54), // Flipped vertically
      size: i % 11 === 1 ? 10 : 5, // Large bead every 10 small beads
    })),
];

const QuickRosaryScreen = ({ navigation }) => {
  const [litIndex, setLitIndex] = useState(-1);

  const handleNext = () => {
    if (litIndex < beadsSequence.length - 1) {
      setLitIndex(litIndex + 1);
    }
  };

  const handleBack = () => {
    if (litIndex > -1) {
      setLitIndex(litIndex - 1);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Svg height="700" width="400">
          {/* Cross */}
          <Line x1="190" y1="530" x2="210" y2="530" stroke="black" strokeWidth="8" />
          <Line x1="200" y1="520" x2="200" y2="550" stroke="black" strokeWidth="8" />

          {/* Diamond */}
          {/*<Circle cx={diamond.cx} cy={diamond.cy} r={diamond.size} fill={litIndex >= 0 ? 'gold' : 'black'} stroke="black" strokeWidth="2" />*/}

          {/* Rosary beads */}
          {beadsSequence.map((bead, index) => (
            <Circle
              key={index}
              cx={bead.cx}
              cy={bead.cy}
              r={bead.size}
              fill={index <= litIndex ? 'gold' : 'black'}
              stroke="black"
              strokeWidth="2"
            />
          ))}
        </Svg>

        {/* Navigation Buttons */}
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer:{
    flexGrow : 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    paddingBottom: 20,
  },
  backButton: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    backgroundColor: '#dc3545',
    padding: 15,
    borderRadius: 5,
  },
  nextButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default QuickRosaryScreen;
