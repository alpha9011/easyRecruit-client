import {  Table } from "flowbite-react";
import PropTypes  from 'prop-types'


const CandidateCard = ({candidate}) => {
    console.log(candidate);

//     all applier candidates data, use what you need to build card/ table
//    const candidatesData= { name, email,phone,photo,country,resume,coverLetter,lastAcademy,language,salary,gender,companyName,jobTitle,jobPostEmail,applyDate}

    const {photo, name, resume, coverLetter, jobTitle, isSelected} = candidate|| {};
    console.log(name);
 
    return (
        
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 text-center">
            <Table.Cell className="flex justify-center"> <img src={photo} alt=""  className="w-12 h-12 rounded-full "/> </Table.Cell>
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{name}</Table.Cell>
        <Table.Cell>{jobTitle}</Table.Cell>
        
    
        <Table.Cell> <a href={resume} target="_">Resume</a> </Table.Cell>
        <Table.Cell> <a href={coverLetter} target="_">Cover Letter</a> </Table.Cell>
        <Table.Cell> {isSelected || 'waiting'} </Table.Cell>
       
      </Table.Row>
    );
};

CandidateCard.propTypes = {
    candidate:PropTypes.object,
    candidates:PropTypes.object,
    setCandidate:PropTypes.object,
}

export default CandidateCard;