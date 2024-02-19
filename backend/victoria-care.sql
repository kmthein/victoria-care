-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 20, 2023 at 04:51 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `victoria-care`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `id` int(11) NOT NULL,
  `patient_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `doctor_name` varchar(50) NOT NULL,
  `specialty` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  `contact_no` varchar(50) NOT NULL,
  `prev_record` varchar(50) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `fees` varchar(11) NOT NULL,
  `status` varchar(11) NOT NULL,
  `appointed_at` date NOT NULL,
  `patient_id` int(11) NOT NULL,
  `doctor_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `appointment`
--

INSERT INTO `appointment` (`id`, `patient_name`, `email`, `doctor_name`, `specialty`, `date`, `time`, `contact_no`, `prev_record`, `description`, `fees`, `status`, `appointed_at`, `patient_id`, `doctor_id`) VALUES
(1, 'Kyaw Min Thein', 'kyawminthein@gmail.com', 'Prof: Win Win Kyaw', 'Cardiac Surgery ( နှလုံးနှင့်သွေးကြောခွဲစိတ်ကုပညာ )', 'Sun Aug 13 2023', '10:00 AM - 11:00 AM', '+95 9 318 74369', 'No', '', '15', 'Unpaid', '2023-08-09', 2, 1),
(2, 'Kyaw Min Thein', 'kyawminthein@gmail.com', 'Dr. Kyaw Swar Linn', 'General Medicine (အထွေထွေဆေးပညာ)', 'Mon Aug 14 2023', '5:30 PM', '+95 9 318 74369', 'No', '', '', 'Unpaid', '2023-08-09', 2, 21),
(3, 'Kyaw Min Thein', 'kyawminthein@gmail.com', 'Prof: Aye Min Soe', 'Gastroenterology ( အစာအိမ်နှင့် အူလမ်းကြောင်းဆေးပညာ )', 'Tue Aug 15 2023', '5:30 PM- 6:30 PM', '+95 9 318 74369', 'No', '', '', 'Unpaid', '2023-08-09', 2, 30),
(4, 'Test', 'test@gmail.com', 'Dr. Khin Myo Oo', 'Obstetric & Gynaecology ( သားဖွားမီးယပ်ပညာ )', 'Thu Sep 07 2023', '1:00 PM', '09953281899', 'No', '', '', 'Unpaid', '2023-09-01', 3, 28),
(5, 'Test', 'test@gmail.com', 'Prof: Win Win Kyaw', 'Cardiac Surgery ( နှလုံးနှင့်သွေးကြောခွဲစိတ်ကုပညာ )', 'Sun Sep 03 2023', '10:00 AM - 11:00 AM', '09953281899', 'No', '', '15', 'Paid', '2023-09-01', 3, 1),
(6, 'Test', 'test@gmail.com', 'Prof: Maung Maung Khine', 'Otorhinolaryngology Head & Neck Surgery ( နား၊ နှာခေါင်း၊ လည်ချောင်း၊ ဦးခေါင်းနှင့် လည်ပင်း ခွဲစိတ်ကုပညာ)', 'Sat Sep 02 2023', '10:00 AM – 11:00 AM', '09953281899', 'No', '', '15', 'Unpaid', '2023-09-01', 3, 2),
(7, 'Test', 'test@gmail.com', 'Prof: Win Win Kyaw', 'Cardiac Surgery ( နှလုံးနှင့်သွေးကြောခွဲစိတ်ကုပညာ )', 'Sun Sep 03 2023', '10:00 AM - 11:00 AM', '09953281899', 'No', '', '15', 'Unpaid', '2023-09-01', 3, 1),
(13, 'test2', 'test2@gmail.com', 'Dr. Htun Aung Kyaw', 'Clinical Haemotology ( သွေးရောဂါပညာ )', 'Sun Sep 24 2023', '6:00 – 8:00 PM', '09953281899', 'No', '', '8', 'Paid', '2023-09-03', 9, 14);

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `subject` varchar(800) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `message` varchar(800) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `subject`, `phone`, `message`) VALUES
(1, 'Kyaw Min Thein', 'kyawminthein@gmail.com', 'Please contact my phone number.', '09774312344', 'Please let me know your availability for appointments in the upcoming weeks, any specific tests or records you may need from my side, and any preliminary advice or precautions I should take before our appointment.\n\nConfidentiality and privacy are of utmost importance to me, and I trust in your professionalism and expertise. If you require any further information or have specific forms to fill out prior to the appointment, please don\'t hesitate to inform me.\n\nThank you for your attention to this matter. I look forward to your response and guidance. Your expertise and care are highly valued, and I believe your assistance will help me on the path to better health.'),
(2, 'Kyaw Min Thein', 'test@gmail.com', 'Review for car service', '09774312344', 'test');

-- --------------------------------------------------------

--
-- Table structure for table `doctor`
--

CREATE TABLE `doctor` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `qualification` varchar(1000) NOT NULL,
  `contact_no` varchar(255) NOT NULL,
  `doctor_fees` varchar(11) NOT NULL,
  `schedule_day` varchar(255) NOT NULL,
  `schedule_time` varchar(255) NOT NULL,
  `specialty_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `doctor`
--

INSERT INTO `doctor` (`id`, `name`, `qualification`, `contact_no`, `doctor_fees`, `schedule_day`, `schedule_time`, `specialty_id`) VALUES
(1, 'Prof: Win Win Kyaw', 'M.B.,B.S, M.Med.Sc (Surgery)\r\nF.R.C.S (Edin), Dr.Med.Sc (Cardiac Surgery)', '+95 9 263 340 988\r\n', '15', '[{\"day\":\"Sunday\"}]', '[{\"time\":\"10:00 AM - 11:00 AM\"}]', 1),
(2, 'Prof: Maung Maung Khine', 'M.B.,B.S, M.Med.Sc (ENT),\nDr.Med.Sc (Otorhinolaryngology),\nDip.Med.Edu,Training in ORL (France)', '+95 9 554 5338', '15', '[{\"day\":\"Saturday\"},{\"day\":\"Sunday\"}]', '[{\"time\":\"10:00 AM – 11:00 AM\"}]', 3),
(3, 'Asso: Prof: Khine Zan Mya', 'M.B.,B.S, M.Med.Sc(OG)', '+95 9 902 9826\r\n', '10', '[{\"day\":\"Tuesday\"},{\"day\":\"Saturday\"}]', '[{\"time\":\"5:00 PM – 6:30 PM\"},{\"time\":\"4:00 PM – 5:00 PM\"}]', 8),
(14, 'Dr. Htun Aung Kyaw', 'M.B.,B.S, M.Med.Sc (Int.Med),\nDiploma in Clinical Cardiology\nFellowship in Cardiac Electrophysiology and Pacing (Japan)', '+95 9 554 5338', '8', '[{\"day\":\"Sunday\"},{\"day\":\"Monday\"}]', '[{\"time\":\"6:00 – 8:00 PM\"}]', 6),
(15, 'Asso: Prof: Thida Shwe', 'M.B.,B.S, M.Med.Sc (ENT), Fellowship in\nH&N Surgery & Oncology, IFHNOS,USA\nCertificate of Clinical Fellowship in\nORLHNS(Malaysia)\nSenior Consultant ENT-Head & Neck Surgeon', '+95 9 525 6316', '10', '[{\"day\":\"Tuesday\"},{\"day\":\"Wednesday\"}]', '[{\"time\":\"8:00 AM\"},{\"time\":\"1:00 PM\"}]', 10),
(16, 'Prof: Phone Myint Tun', 'M.B.,B.S,M.Med.Sc (ENT), M.R.C.S (Edin),\nDr.Med.Sc (ENT), Dip.Med.Edu\nSenior Consultant ENT-Head and Neck Surgeon', '+95 9 617 28956', '15', '[{\"day\":\"Wednesday\"},{\"day\":\"Saturday\"},{\"day\":\"Friday\"}]', '[{\"time\":\"6:30 PM\"},{\"time\":\"7:00 PM\"},{\"time\":\"11:30 AM – 12:30 PM\"}]', 3),
(18, ' Dr. Yan Naung', 'M.B.,B.S, M.Med.Sc (Surgery)\nFellowship in Cardiothoracic Surgery(CIMS, India), Dr.Med.Sc (Cardiac Sugery), FAsCC\nConsultant Cardiac Surgeon', '+95 9 984 7889', '8', '[{\"day\":\"Saturday\"},{\"day\":\"Sunday\"},{\"day\":\"Thursday\"}]', '[{\"time\":\"8:00-10:00 AM\"},{\"time\":\"2:00- 4:00 PM\"}]', 1),
(19, 'Prof: Thein Tun', 'M.B.,B.S (Ygn), D.L.O, M.Med.Sc (ENT)\nFRCS (Edin) (Otolaryngology),', '+95 9 613 32225', '15', '[{\"day\":\"Monday\"},{\"day\":\"Thursday\"}]', '[{\"time\":\"7:30 AM\"}]', 3),
(20, 'Prof: Khin Hla Hla', 'M.B.,B.S, M.Med.Sc (ENT),\nDr.Med.Sc (ORL), Dip.Med.Ed\nTraining in Audiological Medicine (BKK)', '+95 9 904 4492', '15', '[{\"day\":\"Saturday\"},{\"day\":\"Sunday\"}]', '[{\"time\":\"10:00 AM\"}]', 18),
(21, 'Dr. Kyaw Swar Linn', 'M.B.,B.S, M.Med.Sc (Int.Med),\nDr.Med.Sc (Gen Med),\nDip.Med.Edu,Training in HIV (France)', '+95 9 740 509923', '8', '[{\"day\":\"Monday\"},{\"day\":\"Wednesday\"},{\"day\":\"Friday\"}]', '[{\"time\":\"5:30 PM\"}]', 4),
(22, 'Dr. Khin Yadanar Soe', 'M.B.,B.S, M.Med.Sc (Mental Health)\n', '+95 9 906 7119', '8', '[{\"day\":\"Monday\"},{\"day\":\"Wednesday\"},{\"day\":\"Friday\"}]', '[{\"time\":\"5:00 PM - 7:00 PM\"}]', 21),
(23, 'Prof: Khin Maung Win', 'M.B.,B.S (Mdy), M.Med.Sc (Int.Med)\nM.R.C.P(UK), F.R.C.P(Edin)', '+95 1 708 083', '15', '[{\"day\":\"Monday\"},{\"day\":\"Friday\"}]', '[{\"time\":\"12:00 PM\"}]', 15),
(24, 'Dr: Saw Aung Hla Win', 'M.B.,B.S, D.L.O, M.Med.Sc (ENT)\nAssociate Professor/Consultant ENT Surgeon', '+95 1 716 274', '8', '[{\"day\":\"Monday\"},{\"day\":\"Friday\"}]', '[{\"time\":\"11:00 AM\"},{\"time\":\"10:30 AM\"}]', 7),
(25, 'Prof: Khin Maung Htay', 'M.B.,B.S, M.Med.Sc (Int.Med),\nDTM & H (London), M.R.C.P (UK),\nF.R.C.P (Edin), Dr. Med.Sc (Medicine)\nMember of International Society of Nephrology\nMember of American Society of Nephrology', '+95 1 706 416', '15', '[{\"day\":\"Tuesday\"},{\"day\":\"Thursday\"},{\"day\":\"Saturday\"}]', '[{\"time\":\"10:30 AM\"}]', 9),
(26, 'Dr. Myo Min Oo', 'M.B.,B.S, M.Med.Sc (Surgery)\nPlastic & Maxillofacial Surgeon', '+95 9 945 878044', '8', '[{\"day\":\"Monday\"},{\"day\":\"Wednesday\"}]', '[{\"time\":\"4:30 PM\"}]', 24),
(27, 'Prof: Myo Than', 'M.B.,B.S, M.Med.Sc(Surgery)\nM.R.C.S(Edin), Dr.Med.Sc(Urology)\nSenior Consultant Urologist', '+95 9 617 63295', '15', '[{\"day\":\"Tuesday\"},{\"day\":\"Thursday\"},{\"day\":\"Saturday\"}]', '[{\"time\":\"6:00 pm\"}]', 13),
(28, 'Dr. Khin Myo Oo', 'M.B.,B.S, M.Med.Sc (OG)', '+95 9 664 6515', '8', '[{\"day\":\"Thursday\"},{\"day\":\"Friday\"},{\"day\":\"Sunday\"}]', '[{\"time\":\"1:00 PM\"}]', 8),
(29, 'Dr. Ye Tun Naung', 'M.B.,B.S, M.R.C.P (UK), M.Med.Sc (Int.Med)\nFellowship in Interventional\nCardiology (CIMS, India)', '+95 9 740 934870', '8', '[{\"day\":\"Wednesday\"},{\"day\":\"Thursday\"}]', '[{\"time\":\"5:00 PM – 6:30 PM\"}]', 2),
(30, 'Prof: Aye Min Soe', 'M.B.,B.S, M.Med.Sc(Int.Med), M.R.C.P(UK),\nDr. Med.Sc (Gastroenterology),\nF.R.C.P (Edin)', '+95 9 613 97462', '15', '[{\"day\":\"Tuesday\"},{\"day\":\"Thursday\"}]', '[{\"time\":\"5:30 PM- 6:30 PM\"}]', 5);

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `id` int(11) NOT NULL,
  `amount` varchar(50) NOT NULL,
  `date` varchar(50) NOT NULL,
  `time` varchar(50) NOT NULL,
  `user_id` int(11) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `appointment_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`id`, `amount`, `date`, `time`, `user_id`, `user_name`, `appointment_id`) VALUES
(1, '18', 'Fri Sep 01 2023', '10:21:36 AM', 3, 'Test', 5),
(5, '11', 'Sun Sep 03 2023', '2:31:46 PM', 9, 'test2', 13);

-- --------------------------------------------------------

--
-- Table structure for table `specialty`
--

CREATE TABLE `specialty` (
  `id` int(11) NOT NULL,
  `specialty_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `specialty`
--

INSERT INTO `specialty` (`id`, `specialty_name`) VALUES
(1, 'Cardiac Surgery ( နှလုံးနှင့်သွေးကြောခွဲစိတ်ကုပညာ )'),
(2, 'Cardiology ( နှလုံးရောဂါဆေးပညာ )'),
(3, 'Otorhinolaryngology Head & Neck Surgery ( နား၊ နှာခေါင်း၊ လည်ချောင်း၊ ဦးခေါင်းနှင့် လည်ပင်း ခွဲစိတ်ကုပညာ)'),
(4, 'General Medicine (အထွေထွေဆေးပညာ)'),
(5, 'Gastroenterology ( အစာအိမ်နှင့် အူလမ်းကြောင်းဆေးပညာ )'),
(6, 'Clinical Haemotology ( သွေးရောဂါပညာ )'),
(7, 'Surgery ( ခွဲစိတ်ကုပညာ )'),
(8, 'Obstetric & Gynaecology ( သားဖွားမီးယပ်ပညာ )'),
(9, 'Neurology ( ဦးနှောက်နှင့် အာရုံကြောဆေးပညာ )'),
(10, 'Medical Oncology ( ကင်ဆာရောဂါဆေးပညာ )'),
(11, 'Nephrology ( ကျောက်ကပ်ရောဂါပညာ )'),
(12, 'Chest Medicine(အဆုတ်နှင့် အသက်ရှူလမ်းကြောင်းဆိုင်ရာ ဆေးပညာ)'),
(13, 'Urosurgery ( ကျောက်ကပ်နှင့် ဆီးလမ်းကြောင်းရောဂါ ခွဲစိတ်ကုပညာ )'),
(14, 'Nutrition ( အာဟာရဆိုင်ရာပညာ )'),
(15, 'Orthopaedics ( အရိုးရောဂါကုပညာ )'),
(16, 'Paediatrics Surgery ( ကလေးခွဲစိတ်ကုပညာ )'),
(17, 'Paediatrics ( ကလေးကျန်းမာပညာ )'),
(18, 'Radiology ( ဓာတ်မှန်ပညာ )'),
(21, 'Mental Health ( စိတ်ကျန်းမာပညာ )'),
(22, 'Lactation Consultant ( မိခင်နို့ရည်တိုက်ကျွေးခြင်းအကြံပေးပညာရှင် )'),
(23, 'Physical Medicine & Rehabilitation ( အကြောအဆစ်ပြန်လည်သန်စွမ်းရေးပညာ )'),
(24, 'Plastic Surgery ( ပြုပြင်ကုသမှုဆိုင်ရာခွဲစိတ်ကုပညာ )'),
(25, 'Hepatology ( အသည်းရောဂါပညာ )');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone_num` varchar(20) NOT NULL,
  `dob` varchar(30) NOT NULL,
  `images` varchar(255) NOT NULL,
  `created_at` date NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone_num`, `dob`, `images`, `created_at`, `password`, `user_role_id`) VALUES
(1, 'David Test', 'david97@gmail.com', '+95 9 908 0243', '28.07.1993', '1693728405402.jpeg', '2023-08-08', '$2a$10$V/MoCTMgL3uJfEZ95zQ5KuvWpR24atGoi9dB/7DS9F4b98ZJDYoPC', 2),
(2, 'Kyaw Min Thein', 'kyawminthein@gmail.com', '+95 9 318 74369', '8.11.1996', '1692859114480.jpg', '2023-08-08', '$2a$10$V/MoCTMgL3uJfEZ95zQ5KuvWpR24atGoi9dB/7DS9F4b98ZJDYoPC', 1),
(3, 'Test', 'test@gmail.com', '09953281899', '8.11.1996', '1692080295990.jpg', '2023-08-08', '$2a$10$jyQGHW23erVSCv/y6a3tieQg9iaF/IaAs4plsBTxlgVzA0Up0rCfC', 1),
(5, 'Sophie', 'sophie@gmail.com', '+9597284324', '5.4.1997', '1692080092957.jpg', '2023-08-14', '$2a$10$um6eEnp4s.FCVcXw5kh5gu/GS0xWtLw3p/o3Tf/VgOLomY.trvCnq', 2),
(9, 'Test 2', 'test2@gmail.com', '0995328189', '2023-02-08', '1693728146541.png', '2023-09-03', '$2a$10$rHVR0Zn/wgZaidjCmvCyl.PrcmkX1madBibORiRtdkuzgNh0BxfVu', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_role`
--

CREATE TABLE `user_role` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_role`
--

INSERT INTO `user_role` (`id`, `name`) VALUES
(1, 'client'),
(2, 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `patient_id` (`patient_id`),
  ADD KEY `doctor_id` (`doctor_id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`id`),
  ADD KEY `specialty_id` (`specialty_id`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `patient_id` (`user_id`);

--
-- Indexes for table `specialty`
--
ALTER TABLE `specialty`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_role_id` (`user_role_id`);

--
-- Indexes for table `user_role`
--
ALTER TABLE `user_role`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointment`
--
ALTER TABLE `appointment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `doctor`
--
ALTER TABLE `doctor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `specialty`
--
ALTER TABLE `specialty`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `user_role`
--
ALTER TABLE `user_role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointment`
--
ALTER TABLE `appointment`
  ADD CONSTRAINT `appointment_ibfk_1` FOREIGN KEY (`patient_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `appointment_ibfk_2` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`id`);

--
-- Constraints for table `doctor`
--
ALTER TABLE `doctor`
  ADD CONSTRAINT `doctor_ibfk_1` FOREIGN KEY (`specialty_id`) REFERENCES `specialty` (`id`);

--
-- Constraints for table `payment`
--
ALTER TABLE `payment`
  ADD CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`user_role_id`) REFERENCES `user_role` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
