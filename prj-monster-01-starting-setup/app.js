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
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.playerHealth = 0;
                this.monsterHealth = 0;
                alert("'It's a draw!");
            } else if (value <= 0) {
                this.playerHealth = 0;
                alert('You lost!');
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.playerHealth = 0;
                this.monsterHealth = 0;
                alert("It's a draw!'");
            } else if (value <= 0) {
                this.monsterHealth = 0;
                alert('You won!');
            }
        },
    },
    methods: {
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
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
        healPlayer() {
            this.currentRound++;
            const healValue = getRandomValue(8, 20);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.attackPlayer();
        },
    },
});

app.mount('#game');
