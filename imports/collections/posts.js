import {Mongo} from 'meteor/mongo'; 

Meteor.methods({
  'posts.insert': function(){
    return Posts.insert({
      createdAt: new Date(), 
      content: '',
      sharedWith: [],
      owner: this.userId 
    });
  }
});

export const Posts = new Mongo.Collection('posts');
