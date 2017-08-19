import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';
//import { _ } from 'meteor/underscore';

const VALIDATEUSER = new SimpleSchema({
	username: { type: String },
	email: { type: String,  regEx: SimpleSchema.RegEx.Email },
	password: { type: String},
}).validator();

const VALIDATELOGGINUSER = new SimpleSchema({
	email: { type: String,  regEx: SimpleSchema.RegEx.Email },
	password: { type: String},
}).validator();

export const createUser = new ValidatedMethod({
	name: 'user.create',
	validate: VALIDATEUSER,
	run({ username, email, password }) {
		let result;
		try {
			result = Accounts.createUser({username, email, password,});
			console.error(result);
		} catch(err) {
			return err;
		}
		return result;
	},
});

export const logginUser = new ValidatedMethod({
	name: 'user.login',
	validate: VALIDATELOGGINUSER,
	run({ email, password }) {
		let result;

		try {
			result = Meteor.loginWithPassword(email, password);
		} catch(err) {
			return err;
		}

		return result;
	},
});

export const logoutnUser = new ValidatedMethod({
	name: 'user.logout',
	validate: null,
	run() {
		return null;
	},
});
