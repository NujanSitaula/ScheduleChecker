<?php
include 'config.php';

$uploadfile=$_FILES['uploadfile']['tmp_name'];

require './Classes/PHPExcel.php';
require_once './Classes/PHPExcel/IOFactory.php';

$objExcel=PHPExcel_IOFactory::load($uploadfile);
foreach($objExcel->getWorksheetIterator() as $worksheet)
{
	$highestrow=$worksheet->getHighestRow();

	for($row=0;$row<=$highestrow;$row++)
	{
		$day_value = $worksheet->getCellByColumnAndRow(0,$row)->getValue();
		$time_value = $worksheet->getCellByColumnAndRow(1,$row)->getValue();
		$modulecode_value = $worksheet->getCellByColumnAndRow(2,$row)->getValue();
		$moduletitle_value = $worksheet->getCellByColumnAndRow(3,$row)->getValue();
		$hours_value = $worksheet->getCellByColumnAndRow(4,$row)->getValue();
		$classtype_value = $worksheet->getCellByColumnAndRow(5,$row)->getValue();
		$lecturer_value = $worksheet->getCellByColumnAndRow(6,$row)->getValue();
		$group_value = $worksheet->getCellByColumnAndRow(7,$row)->getValue();
		$platform_value = $worksheet->getCellByColumnAndRow(8,$row)->getValue();
		$classroomcode = $worksheet->getCellByColumnAndRow(9,$row)->getValue();

		if($day_value!='')
		{
			$insertqry="INSERT INTO schedule( day, classtime, modulecode, moduletitle, hours, classtype, lecturer, section, platform, classroomcode) VALUES ('$day_value','$time_value','$modulecode_value','$moduletitle_value','$hours_value','$classtype_value','$lecturer_value','$group_value','$platform_value','$classroomcode')";
			//$insertqry="UPDATE extraclass SET class='$class_value', section='$section_value', day='$day_value', time='$time_value', platform='$platform_value', classroomcode='$classroomcode_value' WHERE id='$row'";
			if ($conn->query($insertqry) === TRUE) {
			  echo "New record created successfully";
			} else {
			  echo "Error: " . $insertqry . "<br>" . $conn->error;
			}
		}
	}
}
location('./index.php');
?>
