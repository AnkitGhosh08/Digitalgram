import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Avatar} from 'react-native-paper';
import Header from './Src/Component/Header';
import Video from 'react-native-video';

const postData = [
  {
    id: 1,
    image:
      'https://th.bing.com/th/id/OIP.2bJ9_f9aKoGCME7ZIff-ZwHaJ4?pid=ImgDet&rs=1',
    username: 'Sarvagya',
    caption: 'This is My first post',
    likes: 10,
  },
  {
    id: 2,
    video:
      'https://firebasestorage.googleapis.com/v0/b/fun-do-notes-15386.appspot.com/o/file_example_MP4_480_1_5MG.mp4?alt=media&token=88b5dba6-c185-4e79-b3c4-d90884068205',
    username: 'kalash',
    caption: 'beautiful earth !',
    likes: 20,
  },
  {
    id: 3,
    image: 'https://www.imagelighteditor.com/img/bg-after.jpg',
    username: 'Bob',
    caption: 'Just out here living my best life.',
    likes: 30,
  },
  {
    id: 4,
    video:
      'https://firebasestorage.googleapis.com/v0/b/fun-do-notes-15386.appspot.com/o/SampleVideo_720x480_2mb.mp4?alt=media&token=707dfacf-140b-4bbd-979e-380968ce8ed6',
    username: 'Robin',
    caption: 'morning vibe.',
    likes: 50,
  },
  {
    id: 5,
    image:
      'https://i.pinimg.com/originals/e2/05/4b/e2054b0c108f943fa58d98b8a4d37cd5.png',
    username: 'Adam',
    caption: 'Flower.',
    likes: 30,
  },
];

const App = () => {
  const [posts, setPosts] = useState([]);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setPosts(postData);
  }, []);

  const handleLike = postId => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return {...post, likes: post.likes + 1};
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const renderPost = ({item}) => {
    return (
      <View style={styles.container}>
        <View style={styles.postContainer}>
          <View style={styles.postHeader}>
            <Avatar.Image
              size={24}
              source={{
                uri: 'https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/11/photo-metadata-1.png',
              }}
            />
            <View style={styles.icon}>
              <Text style={styles.username}>{item.username}</Text>
            </View>
          </View>
          {item.image ? (
            <Image source={{uri: item.image}} style={styles.postImage} />
          ) : (
            <Video
              source={{uri: item.video}}
              style={styles.postImage}
              resizeMode="cover"
              repeat
            />
          )}
          <View style={styles.postFooter}>
            <Text style={styles.caption}>
              {item.username} : {item.caption}
            </Text>
            <View style={styles.likesContainer}>
              <TouchableOpacity onPress={() => handleLike(item.id)}>
                <Ionicons name={'heart'} size={30} color={'red'} />
                <Text>Like</Text>
              </TouchableOpacity>
              <Text style={styles.likes}>{item.likes} likes</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Header />
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={renderPost}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  postContainer: {
    marginBottom: 20,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  username: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
  },
  postFooter: {
    marginTop: 10,
  },
  caption: {
    fontSize: 14,
    marginTop: 5,
  },

  likesContainer: {
    backgroundColor: '',
  },
  likes: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 2,
  },
  icon: {
    marginLeft: 10,
  },
  likeButton: {
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
});
export default App;
