import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
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
});

const ResumePdf = ({ resumeData }) => {
    console.log(resumeData);

    return (
        <Document>
            <Page size="A4" style={styles.page}>
               <View style={styles.section}>
               <View style={styles.section}>
                    <Text style={styles.heading}>{resumeData?.personalInfo?.name}</Text>
                    <Text style={styles.title}>{resumeData?.workExperience.position}</Text>
                    <View style={styles.flexSection}>
                        <Text style={styles.text}>{resumeData?.personalInfo?.email}</Text>
                        <Text style={styles.text}>Phone: {resumeData?.personalInfo?.phone}</Text>
                    </View>
                </View>
                <View style={styles.divider}></View>
                <Text style={styles.text}>Vision :  {resumeData?.personalInfo?.jobDescription}</Text>
                <View style={styles.divider}></View>

                <View style={styles.section}>
                    <Text style={styles.text}>Position: {resumeData?.workExperience.position}</Text>
                    <Text style={styles.text}>Experience: {resumeData?.workExperience.experience}</Text>
                    <Text style={styles.text}>Company: {resumeData?.workExperience.company}</Text>
                    <Text style={styles.text}>Title: {resumeData?.workExperience.title}</Text>
                    <Text style={styles.text}>Start Date: {resumeData?.workExperience.startDate}</Text>
                    <Text style={styles.text}>End Date: {resumeData?.workExperience.endDate}</Text>
                </View>
                <View style={styles.divider}></View>

                <View style={styles.section}>
                    <Text style={styles.text}>Education: </Text>
                    <Text style={styles.text}>Degree: {resumeData?.education.degree}</Text>
                    <Text style={styles.text}>University: {resumeData?.education.university}</Text>
                    <Text style={styles.text}>Graduation Year: {resumeData?.education.graduationYear}</Text>
                </View>
                <View style={styles.divider}></View>

                <View style={styles.section}>
                    <Text style={styles.text}>Programming Language: {resumeData?.skills.programming}</Text>
                    <Text style={styles.text}>Project: {resumeData?.skills.project}</Text>
                    <Text style={styles.text}>Project Details: {resumeData?.skills.projectDetails}</Text>
                    <Text style={styles.text}>Teamwork: {resumeData?.skills.teamwork}</Text>
                </View>
                <View style={styles.divider}></View>

                <View style={styles.section}>
                    <Text style={styles.text}>Language: </Text>
                    <Text style={styles.text}>Native: {resumeData?.language.native}</Text>
                    <Text style={styles.text}>Foreign: {resumeData?.language.foreign}</Text>
                </View>
               </View>
            </Page>
        </Document>
    );
};

export default ResumePdf;
