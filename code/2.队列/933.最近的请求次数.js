/*
 * @lc app=leetcode.cn id=933 lang=javascript
 *
 * [933] 最近的请求次数
 */

// @lc code=start

var RecentCounter = function () {
  this.pings = new Array();
  this.pre = 0;
  this.tail = 0;
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.pings[this.tail++] = t;
  while (t - this.pings[this.pre] - 3000 > 0) {
    this.pre++;
  }
  return this.tail - this.pre;
};

// var RecentCounter = function () {
//   this.pings = new Array();
//   this.cur = 0;
// };

// /** 
//  * @param {number} t
//  * @return {number}
//  */
// RecentCounter.prototype.ping = function (t) {
//   this.pings.push(t);
//   while (t - this.pings[this.cur] - 3000 > 0) {
//     this.cur++;
//   }
//   return this.pings.length - this.cur;
// };


/**
 * 复习 2021-08-04
 */
// var RecentCounter = function() {
//   this.pings = [];
// };
// RecentCounter.prototype.ping = function(t) {
//   this.pings.push(t);
//   while(t - this.pings[0]> 3000) this.pings.shift();
//   return this.pings.length;
// };
/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end

