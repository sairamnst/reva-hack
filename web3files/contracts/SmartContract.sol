pragma solidity ^0.8.9;

contract SmartContract {
    struct Course {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        address[] paidMembers;
    }

    mapping(uint256 => Course) public courses;

    uint256 public noOfCourses = 0;

    function createCourse(
        address _owner,
        string memory _title,
        string memory _description,
        uint256 _target,
        uint256 _deadline
    ) public returns (uint256) {
        Course storage course = courses[noOfCourses];

        course.owner = _owner;
        course.title = _title;
        course.deadline = _deadline;
        course.target = _target;
        course.description = _description;
        course.amountCollected=0;
        noOfCourses++;
        return noOfCourses - 1;
    }

    function payForCourse(uint256 _id) public payable {
        uint256 amount = msg.value;

        Course storage course = courses[_id];
        course.paidMembers.push(msg.sender);

        (bool sent, ) = payable(course.owner).call{value: amount}("");

        if (sent) {
            course.amountCollected = course.amountCollected + amount;
        }
    }

    function getPaidMembers(
        uint256 _id
    ) public view returns (address[] memory) {
        return (courses[_id].paidMembers);
    }

    function getCourses() public view returns (Course[] memory) {
        Course[] memory allCourses = new Course[](noOfCourses);

        for (uint i = 0; i < noOfCourses; i++) {
            Course storage item = courses[i];

            allCourses[i] = item;
        }
        return allCourses;
    }
}