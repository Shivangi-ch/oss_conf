import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './PaperSubmission.css';
const PaperSubmission = () => {
  return (
    <>
      <Navbar />
      <h1>Paper Submission</h1>
      <hr />
      <p>
        The Original unpublished Research Papers, Articles & Working papers
        having maximum length 8 pages on the topics related to the theme are
        invited for presentation/publication in the conference proceedings.{' '}
      </p>
      <p>
        1.Kindly ensure that your paper is formatted as per{' '}
        <a href=''>Springer Guidelines</a>
        (not exceeding 8 pages written in A4 size). Please refer the attached
        springer template for preparation of your paper.
      </p>
      <p>
        2.All papers must be submitted online. via{' '}
        <a href='https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICICC2022'>
          Microsoft CMT
        </a>{' '}
      </p>
      <p>
        3.All submissions will be thoroughly peer-reviewed by experts based on
        originality, significance and clarity.
      </p>
      <p>
        4.Only papers presenting original content with novel research results or
        successful innovative applications will be considered for publication in
        the conference proceedings (as chapters in edited volumes of Springer
        Series).
      </p>
      <hr />
      <h2>Plagiarism Policy</h2>
      <p>
        1.The paper prior to submission should be checked for plagiarism from
        licensed plagiarism softwares like Turnitin/iAuthenticate etc. The
        similarity content should not exceed 20% (in any case either self
        contents or others). Further, you have to strictly implement the
        following ethical guidelines for publication.
      </p>
      <p>
        2.Any form of self-plagiarism or plagiarism from others' work(s) should
        not be there in an article. If any model / concept / figure / table /
        data / conclusive comment by any previously published work is used in
        your article, you should properly cite a reference to the original work.
      </p>
      <p>
        3.Also language of explaining it should not be same as language of the
        work from which you have adopted it. If you are using any copyrighted
        material, you should acquire prior permission from the copyright holder.{' '}
      </p>
      <Footer />
    </>
  );
};

export default PaperSubmission;