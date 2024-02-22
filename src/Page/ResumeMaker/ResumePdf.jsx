import { Document, Page, Text, View } from '@react-pdf/renderer';

const ResumePdf = ({ resumeData }) => {

    console.log(resumeData);

    return (

        <Document>

            return (
            <Page size="A4"  >
                <View  >
                    <Text >{resumeData?.personalInfo?.name}</Text>
                    <Text >{resumeData?.personalInfo?.email}</Text>
                    <Text >{resumeData?.personalInfo?.phone}</Text>
                    <Text >{resumeData?.personalInfo?.jobDescription}</Text>

                    <Text >{resumeData?.education.degree}</Text>
                    <Text >{resumeData?.education.school}</Text>
                    <Text >{resumeData?.education.graduationYear}</Text>

                    <Text >{resumeData?.workExperience.position}</Text>
                    <Text >{resumeData?.workExperience.company}</Text>
                    <Text >{resumeData?.workExperience.startDate}</Text>
                    <Text >{resumeData?.workExperience.endDate}</Text>

                    <Text >{resumeData?.skills.programming}</Text>
                    <Text >{resumeData?.skills.communication}</Text>
                    <Text >{resumeData?.skills.teamwork}</Text>
                </View>

            </Page>
            )


        </Document>
    );
};

export default ResumePdf;
