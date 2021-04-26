import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'omnifood';
	imageGrid: Object[] = [
		{
			name: 'Korean bibimbap with egg and vegetables',
			src: '../assets/img/1.jpg'
		},
		{
			name: 'Simple italian pizza with cherry tomatoes',
			src: '../assets/img/2.jpg'
		},
		{
			name: 'Chicken breast steak with vegetables',
			src: '../assets/img/3.jpg'
		},
		{
			name: 'Autumn pumpkin soup',
			src: '../assets/img/4.jpg'
		},
		{
			name: 'Paleo beef steak with vegetables',
			src: '../assets/img/5.jpg'
		},
		{
			name: 'Healthy baguette with egg and vegetables',
			src: '../assets/img/6.jpg'
		},
		{
			name: 'Burger with cheddar and bacon',
			src: '../assets/img/7.jpg'
		},
		{
			name: 'Granola with cherries and strawberries',
			src: '../assets/img/8.jpg'
		},
	]
	features: Object[] = [
		{
			title:"Up to 365 days/year",
			desc: "Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.",
			icon: "today"
		},
		{
			title:"Ready in 20 minutes",
			desc: "You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.",
			icon: "time"
		},
		{
			title:"100% organic",
			desc: "All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!",
			icon: "leaf"
		},
		{
			title:"Order anything",
			desc: "We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!",
			icon: "cart"
		}
	]
	steps: Object[] = [
		{
			no: 1,
			desc: "Choose the subscription plan that best fits your needs and sign up today."
		},
		{
			no: 2,
			desc: "Order your delicious meal using our mobile app or website. Or you can even call us!"
		},
		{
			no: 3,
			desc: "Enjoy your meal after less than 20 minutes. See you the next time!"
		},
	]
}
