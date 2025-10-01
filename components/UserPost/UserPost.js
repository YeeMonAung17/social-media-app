import {faHeart, faMessage} from '@fortawesome/free-regular-svg-icons';
import {faBookBookmark, faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {horizontalScale, scaleFontSize} from '../../assets/styles/scaling';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import style from './style';

const UserPost = props => {
  return (
    <View style={style.userPostContainer}>
      <View style={style.user}>
        <View style={style.userContainer}>
          <UserProfileImage
            profileImage={props.profileImage}
            imageDimension={horizontalScale(48)}
          />
          <View style={style.userTextContainer}>
            <View>
              <Text style={style.userName}>
                {props.firstName} {props.lastName}
              </Text>
              {props.location && (
                <Text style={style.location}>{props.location}</Text>
              )}
            </View>

            <FontAwesomeIcon
              icon={faEllipsisH}
              size={scaleFontSize(24)}
              color={'#79869F'}
            />
          </View>
        </View>
      </View>
      <View style={style.postImage}>
        <Image source={props.image} />
      </View>
      <View style={style.userPostStats}>
        <View style={style.userPostStatButton}>
          <FontAwesomeIcon icon={faHeart} color="#79869F" />
          <Text style={style.userPostStatText}>{props.likes}</Text>
        </View>
        <View style={style.userPostStatButtonRight}>
          <FontAwesomeIcon icon={faMessage} color="#79869F" />
          <Text style={style.userPostStatText}>{props.comments}</Text>
        </View>
        <View style={style.userPostStatButtonRight}>
          <FontAwesomeIcon icon={faBookBookmark} color="#79869F" />
          <Text style={style.userPostStatText}>{props.bookmarks}</Text>
        </View>
      </View>
    </View>
  );
};

UserPost.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string,
  image: PropTypes.any.isRequired,
  profileImage: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
};

export default UserPost;
