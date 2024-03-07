import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = {

  style: StyleSheet.create({
    page: {
      flexDirection: 'row',
      padding: 20,
    },
    section: {
      marginBottom: 10,
    },
    heading: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    divider: {
      width: '100%',
      height: 1,
      backgroundColor: 'black',
      marginBottom: 5,
      marginTop: 5,
    },
    text: {
      fontSize: 12,
      marginBottom: 3,
    },
    boldText: {
      fontWeight: 'bold',
    },
  }),

};


const ResumePdf = ({ resumeData }) => {
  const selectedStyle = styles.style;
  console.log(resumeData);

  return (
    <Document>
      <Page size="A4" style={selectedStyle.page}>
        <View style={selectedStyle.section}>
          <View style={selectedStyle.section}>
            <Text style={selectedStyle.heading}>{resumeData?.personalInfo?.name}</Text>
            <Text style={selectedStyle.title}>{resumeData?.workExperience.position}</Text>
            <View style={selectedStyle.flexSection}>
              <Text style={selectedStyle.text}>{resumeData?.personalInfo?.email}</Text>

              <Text style={selectedStyle.text}>
                <Text style={selectedStyle.boldText}>Phone:</Text> {resumeData?.personalInfo?.phone}
              </Text>
              
            </View>
          </View>
          <View style={selectedStyle.divider}></View>
          <Text style={selectedStyle.text}>Vision : {resumeData?.personalInfo?.jobDescription}</Text>
          <View style={selectedStyle.divider}></View>

          <View style={selectedStyle.section}>
            <Text style={selectedStyle.text}>Position: {resumeData?.workExperience.position}</Text>
            <Text style={selectedStyle.text}>Experience: {resumeData?.workExperience.experience}</Text>
            <Text style={selectedStyle.text}>Company: {resumeData?.workExperience.company}</Text>
            <Text style={selectedStyle.text}>Title: {resumeData?.workExperience.title}</Text>
            <Text style={selectedStyle.text}>Start Date: {resumeData?.workExperience.startDate}</Text>
            <Text style={selectedStyle.text}>End Date: {resumeData?.workExperience.endDate}</Text>
          </View>
          <View style={selectedStyle.divider}></View>

          <View style={selectedStyle.section}>
            <Text style={selectedStyle.text}>Education: </Text>
            <Text style={selectedStyle.text}>Degree: {resumeData?.education.degree}</Text>
            <Text style={selectedStyle.text}>University: {resumeData?.education.university}</Text>
            <Text style={selectedStyle.text}>Graduation Year: {resumeData?.education.graduationYear}</Text>
          </View>
          <View style={selectedStyle.divider}></View>

          <View style={selectedStyle.section}>
            <Text style={selectedStyle.text}>Programming Language: {resumeData?.skills.programming}</Text>
            <Text style={selectedStyle.text}>Project: {resumeData?.skills.project}</Text>
            <Text style={selectedStyle.text}>Project Details: {resumeData?.skills.projectDetails}</Text>
            <Text style={selectedStyle.text}>Teamwork: {resumeData?.skills.teamwork}</Text>
          </View>
          <View style={selectedStyle.divider}></View>

          <View style={selectedStyle.section}>
            <Text style={selectedStyle.text}>Language: </Text>
            <Text style={selectedStyle.text}>Native: {resumeData?.language.native}</Text>
            <Text style={selectedStyle.text}>Foreign: {resumeData?.language.foreign}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ResumePdf;
