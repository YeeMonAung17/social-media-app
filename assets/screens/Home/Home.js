import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Title from '../../../components/Title/Title';
import UserPost from '../../../components/UserPost/UserPost';
import UserStory from '../../../components/UserStory/UserStory';
import {Routes} from '../../../navigation/Routes';
import globalStyle from '../../styles/globalStyle';
import {scaleFontSize} from '../../styles/scaling';
import style from './style';

const Home = ({navigation}) => {
  const userStories = [
    {
      firstName: 'Joseph',
      id: 1,
      profileImage: require('../../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Angel',
      id: 2,
      profileImage: require('../../../assets/images/default_profile.png'),
    },
    {
      firstName: 'White',
      id: 3,
      profileImage: require('../../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Olivier',
      id: 4,
      profileImage: require('../../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Yee',
      id: 5,
      profileImage: require('../../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Ariel',
      id: 6,
      profileImage: require('../../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Ant',
      id: 7,
      profileImage: require('../../../assets/images/default_profile.png'),
    },
    {
      firstName: 'James',
      id: 8,
      profileImage: require('../../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Miti',
      id: 9,
      profileImage: require('../../../assets/images/default_profile.png'),
    },
  ];
  const userPosts = [
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Boston,MA',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      image: require('../../../assets/images/default_post.png'),
      profileImage: require('../../../assets/images/default_profile.png'),
      id: 1,
    },
    {
      firstName: 'Jen',
      lastName: 'Wilkson',
      location: 'Worcester,MA',
      likes: 1301,
      comments: 34,
      bookmarks: 70,
      image: require('../../../assets/images/default_post.png'),
      profileImage: require('../../../assets/images/default_profile.png'),
      id: 2,
    },
    {
      firstName: 'Adam',
      lastName: 'Smith',
      location: 'Worcester,MA',
      likes: 1000,
      comments: 10,
      bookmarks: 5,
      image: require('../../../assets/images/default_post.png'),
      profileImage: require('../../../assets/images/default_profile.png'),
      id: 3,
    },
    {
      firstName: 'Yee',
      lastName: 'Aung',
      location: 'London,uk',
      likes: 2000,
      comments: 50,
      bookmarks: 80,
      image: require('../../../assets/images/default_post.png'),
      profileImage: require('../../../assets/images/default_profile.png'),
      id: 4,
    },
    {
      firstName: 'Ant',
      lastName: 'Rad',
      location: 'London,uk',
      likes: 1500,
      comments: 64,
      bookmarks: 20,
      image: require('../../../assets/images/default_post.png'),
      profileImage: require('../../../assets/images/default_profile.png'),
      id: 5,
    },
  ];

  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const userPostsPageSize = 2;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);

    setIsLoadingUserPosts(true);
    const getInitialDataPosts = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialDataPosts);
    setIsLoadingUserPosts(false);
  }, []);
  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingUserPosts) {
              return;
            }
            setIsLoadingUserPosts(true);
            const contentToAppend = pagination(
              userPosts,
              userPostsCurrentPage + 1,
              userPostsPageSize,
            );
            if (contentToAppend.length > 0) {
              setUserPostsCurrentPage(userPostsCurrentPage + 1);
              setUserPostsRenderedData(prev => [...prev, ...contentToAppend]);
            }
            setIsLoadingUserPosts(false);
          }}
          data={userPostsRenderedData}
          ListHeaderComponent={
            <>
              <View style={style.header}>
                <Title title={'Lets Explore '} />
                <TouchableOpacity
                  style={style.messageIcon}
                  onPress={() => {
                    navigation.navigate(Routes.Profile);
                  }}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size={scaleFontSize(20)}
                    color="#898DAE"
                  />
                  <View style={style.messageNumberContainer}>
                    <Text style={style.messageNumber}>2</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={style.userStoryContainer}>
                <FlatList
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                    if (isLoadingUserStories) {
                      return;
                    }
                    setIsLoadingUserStories(true);
                    const contentToAppend = pagination(
                      userStories,
                      userStoriesCurrentPage + 1,
                      userStoriesPageSize,
                    );
                    if (contentToAppend.length > 0) {
                      setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                      setUserStoriesRenderedData(prev => [
                        ...prev,
                        ...contentToAppend,
                      ]);
                    }
                    setIsLoadingUserStories(false);
                  }}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={userStoriesRenderedData}
                  renderItem={({item}) => (
                    <UserStory
                      key={'userStory' + item.id}
                      firstName={item.firstName}
                      profileImage={item.profileImage}
                    />
                  )}
                />
              </View>
            </>
          }
          renderItem={({item}) => (
            <View style={style.userPostContainer}>
              <UserPost
                firstName={item.firstName}
                lastName={item.lastName}
                image={item.image}
                likes={item.likes}
                comments={item.comments}
                bookmarks={item.bookmarks}
                profileImage={item.profileImage}
                location={item.location}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
