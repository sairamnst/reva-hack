import pandas as pd
import neattext.functions as nfx
from sklearn.feature_extraction.text import CountVectorizer,TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity,linear_kernel

data=pd.read_csv('/courses_data.csv')
data['new_course_title']=data['course_title'].apply(nfx.remove_stopwords).apply(nfx.remove_special_characters)
countVectorizer=CountVectorizer()
vectorMatrix=countVectorizer.fit_transform(data['new_course_title'])
dataWords=pd.DataFrame(vectorMatrix.todense(),columns=countVectorizer.get_feature_names_out())
cosineSimilarity=cosine_similarity(vectorMatrix)
courseIndex=pd.Series(data.index,index=data['course_title']).drop_duplicates()

def recommendCourse(courseTitle,amount=10):
  sortedScores=sorted(list(enumerate(cosineSimilarity[courseIndex[courseTitle]])),key=lambda x:x[1],reverse=True)
  selectedCourseIndex=[x[0] for x in sortedScores[1:]]
  selectedCourseScores=[x[1] for x in sortedScores[1:]]
  result=data['course_title'].iloc[selectedCourseIndex]
  recommendation=pd.DataFrame(result)
  recommendation['similarityScores']=selectedCourseScores
  return recommendation.head(amount)