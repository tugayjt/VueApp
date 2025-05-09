function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
        };
    },
    computed: {
        monsterBarStyles() {
            return { width: this.monsterHealth + '%' };
        },
        playerBarStyles() {
            return { width: this.playerHealth + '%' };
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 === 0 && this.currentRound !== 0;
        },
    },
    methods: {
        attackMonster() {
            this.currentRound++;
            const attacjkValue = getRandomValue(5, 12);
            this.monsterHealth -= attacjkValue;
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
        },
        specialAttackMonster() {
            this.currentRound++;
            const specialAttackValue = getRandomValue(10, 25);
            this.monsterHealth -= specialAttackValue;
            this.attackPlayer();
        },
    }
});

app.mount('#game');