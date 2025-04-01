// BaseMainScreen.tsx
import { useState } from "react";
import { View, ScrollView, Text } from "react-native";
import QuestionCard from "./QuestionCard";
import AnswerCard from "./AnswerCard";
import { questions } from "../data/questions";
import { answers } from "../data/answers";

type BaseMainScreenProps = {
  styles: ReturnType<typeof import("../styles/mainScreenStyles").mainScreenStyles>;
  isDesktop: boolean;
};

const BaseMainScreen = ({ styles, isDesktop }: BaseMainScreenProps) => {
  const [selectedQuestion, setSelectedQuestion] = useState(questions[0].id);
  // New state for the selected answer row index (initialize with a default value, e.g., 0)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number>(0);

  return (
    <View style={styles.container}>
      {/* Question Section */}
      <View style={styles.questionSection}>
        <Text style={styles.questionNumber}>
          Q{selectedQuestion} of {questions.length}
        </Text>
        <ScrollView horizontal={!isDesktop} style={styles.questionScroll}>
          {questions.map((q) => (
            <QuestionCard
              key={q.id}
              question={q}
              isSelected={q.id === selectedQuestion}
              onSelect={setSelectedQuestion}
            />
          ))}
        </ScrollView>
      </View>

      {/* Answer Section */}
      <View style={styles.answerSection}>
        {/* Display selected answer row index */}
        <Text style={styles.questionNumber}>
          Selected row: {selectedAnswerIndex}
        </Text>
        <ScrollView style={styles.answerScroll}>
          {answers[selectedQuestion]?.map((answer, index) => (
            <AnswerCard
              key={answer.id}
              answer={answer}
              // Mark the card as selected if the index matches
              isSelected={selectedAnswerIndex === index}
              // When the answer card is clicked, update the selectedAnswerIndex state
              onSelect={() => setSelectedAnswerIndex(index)}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default BaseMainScreen;
