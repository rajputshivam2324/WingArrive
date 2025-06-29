export const QuizSchema = {
  title: String,
  description: String,
  questions: [
    {
      question: String,
      options: [String],
      correctAnswer: Number,
      explanation: String
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  },
  createdBy: String,
  category: String,
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    default: 'medium'
  },
  timeLimit: Number, // in minutes
  isPublic: {
    type: Boolean,
    default: true
  }
}; 