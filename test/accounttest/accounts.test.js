// Tests for the accounts
//
// https://guide.meteor.com/testing.html
import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import {describe, before, it } from 'meteor/practicalmeteor:mocha';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Accounts } from 'meteor/accounts-base';

if (Meteor.isClient){

	describe('Accounts Test', function accountsTest () {
		/*beforeEach(function beforeTest() {
			resetDatabase();
		});*/

		describe('Test Users', function userTest() {

			before(function beforeTest() {
				resetDatabase();
			});

			it('Create User', function createUserTest(done) {
				const user = {  username: 'rhoyos1985',
								email: 'ricbaquero@gmail.com',
								password: '123456789'
							};

				Accounts.createUser(user, (err) =>{
					assert.isUndefined(err, 'Login User');
					done();
				});


			});

			it('Create User Error', function createUserTest(done) {
				const user = {  username: 'rhoyos1985',
								email: 'ricbaquero@gmail.com',
								password: '123456789'
							};

				Accounts.createUser(user, (err) =>{
					assert.isDefined(err, `Error: ${err}`);
					done();
				});

			});

			it('User loggin', function looginUserSuccessTest (done) {
				const 	email 		= 'ricbaquero@gmail.com',
						password 	= '123456789'

				Meteor.loginWithPassword(email, password, (err) => {
					assert.isUndefined(err, 'Login User');
					assert.isNotNull(Meteor.userId(), 'The UserId Exist')
					done();
				});

			});

			it('User logout', function looginUserSuccessTest (done) {
				if(Meteor.userId()){
					Meteor.logout(err => {
						assert.isUndefined(err, `Error: ${err}`);
						assert.isNull(Meteor.userId(), 'User is Logout');
						done();
					})
				}else{
					done('Error: User is not logged in');
				}
			});

			/*it('Create User Error Test', function createUserErrorTest(done) {

				const user = {  username: 'rhoyos1985',
								email: 'ricbaquero@gmail.com',
								password: '123456789',
								profile: {
									name: 'Richard Hoyos'
								}
							};

				insertUser.call({ user }, (err)=>{
					assert.isNotNull(err, 'Success');
					done();
				});

			});

			it('Update Username Test', function updateUserTest() {
				const user = Accounts.findUserByUsername('rhoyos1985');
				const userUpdate = {
										userId: user._id,
										username: 'rhoyos',
								}

				updateUser._execute({},{ userUpdate });
				assert.isObject(Accounts.findUserByUsername(userUpdate.username), 'Find User');

			});*/

			/*assert.throws(() => {
					insertUser._execute({user3 });
				}, Meteor.Error, /lists.updateName.accessDenied/, 'This is an error inserting user');
*/
		});

	});
}
