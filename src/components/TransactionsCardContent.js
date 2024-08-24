import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { TransactionsData } from '../../constants/data/data'
import colors from '../../constants/colors'
import TransactionsCard from './TransactionsCard'

const TransactionsCardContent = () => {

  return (
    <View>

      <FlatList
        pagingEnabled
        scrollEnabled={false}
        data={TransactionsData}
        contentContainerStyle={{
          marginBottom: 80
        }}
        ItemSeparatorComponent={() => (
          <View style={styles.separatorView} />
        )}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View>
            <TransactionsCard
              customerName={item.customerName}
              transactionDate={item.transactionDate}
              transactionTime={item.transactionTime}
              debitAmount={item.debitAmount}
              balAmount={item.balAmount}
              creditAmount={item.creditAmount}
            />
          </View>
        )}
      />

    </View>
  )
}

export default TransactionsCardContent

const styles = StyleSheet.create({
  separatorView:{
     borderBottomWidth: 1, 
     marginLeft: 20, 
     marginRight: 20, 
     borderColor: colors.lightGrey 
  }
})